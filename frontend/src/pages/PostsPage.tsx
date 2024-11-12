import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PostComponent from "../components/PostComponent";

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostsPage = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      return data;
    },
  });

  /// CREATE
  const createPostMutation = useMutation({
		mutationFn: async (newPost: Post) => {
			const response = await fetch("http://localhost:4000/posts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newPost),
			});
			const data = await response.json();
			console.log(data);
		},
		onMutate: () => {},
		onSettled: () => {},
    onError: () => {},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["posts"],
			});
		},
	});

  const handleCreatePost = () => {
		createPostMutation.mutate({ id: 30, title, content });

	};

  /// DELETE
  const deletePostMutation = useMutation({
		mutationFn: async (id: number) => {
			await fetch(`http://localhost:4000/posts/${id}`, {
				method: "DELETE",
			});
      
      
			
		},
		onSuccess:  () => {

			queryClient.invalidateQueries({
				queryKey: ["posts"],
			});
		},
	});

  
  if (isLoading) return <h1>Loading….</h1>;
  if (isError) return <h1>Error loading data!!!</h1>;

  return (
    <section>
      <div>
        <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Content..." onChange={(e) => setContent(e.target.value)}/>
        <button onClick={handleCreatePost}>ADD POST</button>
      </div>
      <div>
        {posts?.map((post) => (
          <div key={post.id}>
            <PostComponent post={post} />
            <button onClick={() => deletePostMutation.mutate(post.id)}>delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;
