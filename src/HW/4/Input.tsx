import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {ChangeEvent, Dispatch, SetStateAction } from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: Dispatch<SetStateAction<string>>
};

export const Input = (props: InputPropsType) => {

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
