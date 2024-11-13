import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/api/usersRequests";

const useDeleteUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await deleteUser(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
};

export default useDeleteUser;
