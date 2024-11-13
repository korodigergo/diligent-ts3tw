import { Users } from "../../services/api/usersTypes";

type UserDetailsProps = Pick<Users, "name" | "email"> & {
	deleteHandler: () => void;
	switchToEdithandler: () => void;
};

export const UserDetails = ({
	name,
	email,
	deleteHandler,
	switchToEdithandler,
}: UserDetailsProps) => {
	return (
		<div>
			<p>name: {name}</p>
			<p>email: {email}</p>
			<div>
				<button onClick={switchToEdithandler}>edit</button>
				<button onClick={deleteHandler}>delete</button>
			</div>
		</div>
	);
};
