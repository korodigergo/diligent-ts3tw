interface Post {
  id: number;
  title: string;
  content: string;
}

const PostComponent = ({post} : {post: Post}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default PostComponent;