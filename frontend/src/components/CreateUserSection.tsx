import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Users } from "../services/api/usersTypes";

export const CreateUserSection = () => {
	const [newUserName, setNewUserName] = useState<string>("");
	const [newUserEmail, setNewUserEmail] = useState<string>("");
	const queryClient = useQueryClient();

	const createMutation = useMutation({
		mutationFn: async (newUser: Pick<Users, "name" | "email">) => {
			const response = await fetch("http://localhost:4000/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			});
			const data = response.json();
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});

	const handleCreateUsers = () => {};

	return (
		<section>
			<h3>Create a User Here!</h3>
			<label htmlFor='name'>Name:</label>
			<input
				type='text'
				id='name'
				value={newUserName}
				onChange={(e) => {
					setNewUserName(e.target.value);
				}}
			/>{" "}
			<br />
			<label htmlFor='email'>Email:</label>
			<input
				type='text'
				id='email'
				value={newUserEmail}
				onChange={(e) => {
					setNewUserEmail(e.target.value);
				}}
			/>{" "}
			<br />
			<button onClick={handleCreateUsers}>Create User</button>
		</section>
	);
};
