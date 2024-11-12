import { Users } from "../services/api/usersTypes";
import { UserDetails } from "./ui/UserDetails";

export const UsersList = ({ usersArray }: { usersArray: Users[] }) => {
	return (
		<>
			<h3>Users</h3>
			<section style={{ display: "flex", gap: "2em" }}>
				{usersArray.map((user: Users) => {
					return (
						<UserDetails
							id={user.id}
							name={user.name}
							email={user.email}
						/>
					);
				})}
			</section>
		</>
	);
};