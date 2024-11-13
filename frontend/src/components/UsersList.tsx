import { useState } from "react";
import { Users } from "../services/api/usersTypes";
import { UserDetails } from "./ui/UserDetails";
import useDeleteUser from "../hooks/useDeleteUser";
import { EditUserDetails } from "./ui/EditUserDetails";
import useEditUser from "../hooks/useEditUser";

export const UsersList = ({ usersArray }: { usersArray: Users[] }) => {
	const [currentlyEditingId, setCurrentlyEditingId] = useState<number | null>(
		null
	);
	const [newName, setNewName] = useState<string>("");
	const [NewEmail, setNewEmail] = useState<string>("");

	const editMutation = useEditUser();

	const deleteMutation = useDeleteUser();

	const handleEditUser = () => {
		editMutation.mutate({
			id: currentlyEditingId!,
			name: newName,
			email: NewEmail,
		});
		setCurrentlyEditingId(null);
		setNewName("");
		setNewEmail("");
	};

	const handleSwitchToEdit = (id: number) => {
		setCurrentlyEditingId(id);
		setNewName("");
		setNewEmail("");
	};

	const handleDeleteUser = (id: number) => {
		deleteMutation.mutate(id);
	};

	return (
		<>
			<h3>Users</h3>
			<section style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
				{usersArray.map((user: Users) => {
					if (currentlyEditingId === user.id) {
						return (
							<EditUserDetails
								key={user.id}
								editHandler={handleEditUser}
								nameInputValue={newName}
								nameOnChangeHandler={(e) => {
									setNewName(e.target.value);
								}}
								emailInputValue={NewEmail}
								emailOnChangeHandler={(e) => {
									setNewEmail(e.target.value);
								}}
							/>
						);
					}

					return (
						<UserDetails
							key={user.id}
							name={user.name}
							email={user.email}
							deleteHandler={() => {
								handleDeleteUser(user.id);
							}}
							switchToEdithandler={() => {
								handleSwitchToEdit(user.id);
							}}
						/>
					);
				})}
			</section>
		</>
	);
};
