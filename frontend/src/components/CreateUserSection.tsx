import { useState } from "react";
import useCreateNewUser from "../hooks/useCreateNewUser";

export const CreateUserSection = () => {
	const [newUserName, setNewUserName] = useState<string>("");
	const [newUserEmail, setNewUserEmail] = useState<string>("");

	const createMutation = useCreateNewUser();

	const handleCreateUsers = () => {
		createMutation.mutate({ name: newUserName, email: newUserEmail });
		setNewUserName("");
		setNewUserEmail("");
	};

	return (
		<section>
			<h3>Create a User Here!</h3>
			<label htmlFor='name'>Name:</label>
			<br />
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
			<br />
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
