import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Users } from "../services/api/usersTypes";
import { editUser } from "../services/api/usersRequests";

const useEditUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ id, name, email }: Users) => {
			await editUser({ id, name, email });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
};

export default useEditUser;
