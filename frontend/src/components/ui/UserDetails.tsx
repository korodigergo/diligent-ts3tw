import { Users } from "../../services/api/usersTypes";

type UserDetailsProps = Users & {
	deleteHandler: () => void;
	switchToEdithandler: () => void;
};

export const UserDetails = ({
	id,
	name,
	email,
	deleteHandler,
	switchToEdithandler,
}: UserDetailsProps) => {
	return (
		<div>
			<p>id: {id}</p>
			<p>name: {name}</p>
			<p>email: {email}</p>
			<div>
				<button onClick={switchToEdithandler}>edit</button>
				<button onClick={deleteHandler}>delete</button>
			</div>
		</div>
	);
};
