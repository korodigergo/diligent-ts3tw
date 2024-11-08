import { Users } from "../utilities/types";
import { UserDetails } from "./ui/UserDetails";

export const UsersList = ({ usersArray }: { usersArray?: Users[] }) => {
	return (
		<div>
			{usersArray!.map((user: Users) => {
				return (
					<UserDetails
						id={user.id}
						name={user.name}
						email={user.email}
					/>
				);
			})}
		</div>
	);
};
