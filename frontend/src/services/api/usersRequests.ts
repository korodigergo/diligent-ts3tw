import { Users } from "./usersTypes";

export const fetchUsers = async () => {
	const response = await fetch("http://localhost:4000/users");
	return (await response.json()) as Users[];
};
