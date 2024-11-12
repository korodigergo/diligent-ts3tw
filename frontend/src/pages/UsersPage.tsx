import { Error } from "../components/ui/ErrorMessage";
import { UsersList } from "../components/UsersList";
import useFetchUsers from "../hooks/useFetchUsers";
import { CreateUserSection } from "../components/CreateUserSection";

const UsersPage = () => {
	const { data: users, isError, isPending, error } = useFetchUsers();

	if (isError) {
		return <Error errorMsg={error as Error} />;
	}
	if (isPending) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<CreateUserSection />
			<hr />
			<UsersList usersArray={users!} />
		</>
	);
};

export default UsersPage;
