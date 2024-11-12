import { Users } from "../../services/api/usersTypes";

type UserDetailsProps = Users & {
	deleteHandler: () => void;
	editHandler?: () => void;
};

export const UserDetails = ({
	id,
	name,
	email,
	deleteHandler,
}: UserDetailsProps) => {
	return (
		<div>
			<p>id: {id}</p>
			<p>name: {name}</p>
			<p>email: {email}</p>
			<div>
				<button>edit</button>
				<button onClick={deleteHandler}>delete</button>
			</div>
		</div>
	);
};
