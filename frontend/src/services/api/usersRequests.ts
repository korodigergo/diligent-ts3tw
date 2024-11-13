import { Users } from "./usersTypes";

export const fetchUsers = async () => {
	const response = await fetch("http://localhost:4000/users");
	return (await response.json()) as Users[];
};

export const createUser = async (newUser: Pick<Users, "name" | "email">) => {
	return fetch("http://localhost:4000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	});
};

export const editUser = async ({ id, name, email }: Users) => {
	return fetch(`http://localhost:4000/users/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, email }),
	});
};

export const deleteUser = async (id: number) => {
	return fetch(`http://localhost:4000/users/${id}`, {
		method: "DELETE",
	});
};
