import { Users } from "../../services/api/usersTypes";

export const UserDetails = ({ id, name, email }: Users) => {
	return (
		<div>
			<p>id: {id}</p>
			<p>name: {name}</p>
			<p>email: {email}</p>
		</div>
	);
};
