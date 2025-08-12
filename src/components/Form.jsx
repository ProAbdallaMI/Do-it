import { useState } from "react";

export default function Form({
	onSubmit,
	formClassName,
	inputClassName,
	buttonClassName,
	placeholder="Add a new item",
}) {

	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ text: inputValue });
		setInputValue("");
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={`${formClassName}`}>
			<form onSubmit={handleSubmit}>
				<input
					className={`${inputClassName}`}
					value={inputValue}
					type="text"
					placeholder={placeholder}
					onChange={handleInputChange}
				/>
				<input
					className={`${buttonClassName}`}
					type="submit"
					value={"Add"}
					tabIndex={-1}
				/>
			</form>
		</div>
	);
}
