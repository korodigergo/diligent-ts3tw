import { useState } from "react";
import useCreateNewUser from "../hooks/useCreateNewUser";
import { CustomInput } from "./ui/CustomInput";

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
			<CustomInput
				inputValue={newUserName}
				onChangeHandler={(e) => {
					setNewUserName(e.target.value);
				}}
			>
				Name:
			</CustomInput>
			<br />
			<CustomInput
				inputValue={newUserEmail}
				onChangeHandler={(e) => {
					setNewUserEmail(e.target.value);
				}}
			>
				Email:
			</CustomInput>
			<br />
			<button
				disabled={createMutation.isPending}
				onClick={handleCreateUsers}
			>
				Create User
			</button>
			{createMutation.isSuccess && (
				<h3 style={{ color: "green" }}>User was sucessfully created!</h3>
			)}
			{createMutation.isError && (
				<h3 style={{ color: "red" }}>Something went wrong!</h3>
			)}
		</section>
	);
};
