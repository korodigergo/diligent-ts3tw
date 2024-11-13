import { CustomInput } from "./CustomInput";

type EditUserDetailsProps = {
	editHandler: () => void;
	nameInputValue: string;
	nameOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	emailOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	emailInputValue: string;
};

export const EditUserDetails = ({
	editHandler,
	nameInputValue,
	emailInputValue,
	nameOnChangeHandler,
	emailOnChangeHandler,
}: EditUserDetailsProps) => {
	return (
		<div>
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
