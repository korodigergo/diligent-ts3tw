export const Error = ({ errorMsg }: { errorMsg: Error }) => {
	return (
		<div>
			<h1>{errorMsg.message}</h1>
		</div>
	);
};
