import { useQuery } from "@tanstack/react-query";
import { Users } from "../services/api/usersTypes";
import { fetchUsers } from "../services/api/usersRequests";

const useFetchUsers = (): {
	data: Users[] | undefined;
	isError: boolean;
	isPending: boolean;
	error: unknown;
} => {
	return useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});
};

export default useFetchUsers;
