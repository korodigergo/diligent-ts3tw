import { useState } from "react";
import { Users } from "../services/api/usersTypes";
import { UserDetails } from "./ui/UserDetails";
import useDeleteUser from "../hooks/useDeleteUser";
import { EditUserDetails } from "./ui/EditUserDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const UsersList = ({ usersArray }: { usersArray: Users[] }) => {
	const queryClient = useQueryClient();
	// const [isEditActive, setIsEditActive] = useState<boolean>(false);
	const [currentlyEditingId, setCurrentlyEditingId] = useState<number | null>(
		null
	);
	const [newName, setNewName] = useState<string>("");
	const [NewEmail, setNewEmail] = useState<string>("");

	const editMutation = useMutation({
		mutationFn: async ({ id, name, email }: Users) => {
			const response = await fetch(`http://localhost:4000/users/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email }),
			});
			const data = await response.json();
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});

	const deleteMutation = useDeleteUser();

	const handleEditUser = () => {
		// amikor megnyomja akkor lecserélni inputokra a datat
		// editMutation.mutate()
		// setIsEditActive(!isEditActive);
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
		// setIsEditActive(!isEditActive);
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
								id={user.id}
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

					// if (isEditActive) {
					// 	return (
					// 		<EditUserDetails
					// 			key={user.id}
					// 			id={user.id}
					// 			editHandler={handleEditUser}
					// 			nameInputValue={newName}
					// 			nameOnChangeHandler={(e) => {
					// 				setNewName(e.target.value);
					// 			}}
					// 			emailInputValue={NewEmail}
					// 			emailOnChangeHandler={(e) => {
					// 				setNewEmail(e.target.value);
					// 			}}
					// 		/>
					// 		// <div>
					// 		// 	ide jön kb ugyan az csak a data helyett inputok lesznek és a
					// 		// 	deleteBTn eltűnik + 1 ok button lesz
					// 		// </div>
					// 	);
					// }

					return (
						// {/* ezt akkor ha az edit active state false */}
						<UserDetails
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							deleteHandler={() => {
								handleDeleteUser(user.id);
							}}
							switchToEdithandler={() => {
								handleSwitchToEdit(user.id);
							}}
						/>
						// ezt akkor ha active az edit
						// <EditUserDetails></EditUserDetails> és ezen belül lenne a custominput component
					);
				})}
			</section>
		</>
	);
};
