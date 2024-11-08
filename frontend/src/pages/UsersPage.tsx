import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { Users } from "../utilities/types";
import { Error } from "../components/Error";
import { UsersList } from "../components/UsersList";
import useFetchUsers from "../hooks/useFetchUsers";

const UsersPage = () => {
	const queryClient = useQueryClient();

	const { data: users, isError, isPending, error } = useFetchUsers();

	if (isError) {
		return <Error errorMsg={error as Error} />;
	}
	if (isPending) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<UsersList usersArray={users!} />
		</>
	);
};

export default UsersPage;
