import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/api/usersRequests";

const useDeleteUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			const response = await deleteUser(id);
			const data = await response.json();
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
};

export default useDeleteUser;
