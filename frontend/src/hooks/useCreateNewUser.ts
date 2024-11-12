import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/api/usersRequests";
import { Users } from "../services/api/usersTypes";

const useCreateNewUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newUser: Pick<Users, "name" | "email">) => {
			const response = await createUser(newUser);
			const data = response.json();
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
};

export default useCreateNewUser;
