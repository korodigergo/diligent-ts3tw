import { CustomInput } from "./CustomInput";

type EditUserDetailsProps = {
	id: number;
	editHandler: () => void;
	nameInputValue: string;
	nameOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	emailOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	emailInputValue: string;
};

export const EditUserDetails = ({
	id,
	editHandler,
	nameInputValue,
	emailInputValue,
	nameOnChangeHandler,
	emailOnChangeHandler,
}: EditUserDetailsProps) => {
	return (
		<div>
			<p>{id}</p>
			<CustomInput
				inputValue={nameInputValue}
				onChangeHandler={nameOnChangeHandler}
			>
				Name:
			</CustomInput>
			<br />
			<CustomInput
				inputValue={emailInputValue}
				onChangeHandler={emailOnChangeHandler}
			>
				Email:
			</CustomInput>
			<br />
			<button onClick={editHandler}>Ok</button>
		</div>
	);
};
