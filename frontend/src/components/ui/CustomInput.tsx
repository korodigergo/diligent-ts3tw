export type CustomInputProps = {
	children: React.ReactNode;
	inputValue: string;
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({
	children,
	inputValue,
	onChangeHandler,
}: CustomInputProps) => {
	return (
		<>
			<label htmlFor='name'>{children}</label>
			<br />
			<input
				type='text'
				id='name'
				value={inputValue}
				onChange={onChangeHandler}
			/>
		</>
	);
};
