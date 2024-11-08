import { Users } from "../../services/api/usersTypes";

export const UserDetails = ({ id, name, email }: Users) => {
	return (
		<>
			<p>{id}</p>
			<p>{name}</p>
			<p>{email}</p>
		</>
	);
};
