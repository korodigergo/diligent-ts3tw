import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Users } from "../utilities/types";
import { Error } from "../components/Error";
import { UsersList } from "../components/UsersList";
const UsersPage = () => {
	const queryClient = useQueryClient();

	const {
		data: users,
		isError,
		isPending,
		error,
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const response = await fetch("http://localhost:4000/users");
			const data = (await response.json()) as Users[];
			return data;
		},
	});

	if (isError) {
		return <Error errorMsg={error} />;
	}
	if (isPending) {
		<div>Loading...</div>;
	}

	return (
		<>
			<UsersList usersArray={users} />
		</>
	);
};

export default UsersPage;
