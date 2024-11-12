import { useState } from "react";
import { Users } from "../services/api/usersTypes";
import { UserDetails } from "./ui/UserDetails";
import useDeleteUser from "../hooks/useDeleteUser";

export const UsersList = ({ usersArray }: { usersArray: Users[] }) => {
	const [isEditActive, setIsEditActive] = useState<boolean>(false);

	const editMutation = () => {};

	const deleteMutation = useDeleteUser();

	const handleEditUser = () => {
		// amikor megnyomja akkor lecserélni inputokra a datat
	};

	const handleDeleteUser = (id: number) => {
		deleteMutation.mutate(id);
	};

	return (
		<>
			<h3>Users</h3>
			<section style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
				{usersArray.map((user: Users) => {
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
						/>
						// ezt akkor ha active az edit
						// <EditUserDetails></EditUserDetails> és ezen belül lenne a custominput component
					);
				})}
			</section>
		</>
	);
};
