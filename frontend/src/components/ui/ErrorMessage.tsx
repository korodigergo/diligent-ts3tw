export const Error = ({ errorMsg }: { errorMsg: Error }) => {
	return (
		<section>
			<h1>{errorMsg.message}</h1>
		</section>
	);
};
