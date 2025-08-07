import { useRef, useState } from "react";

export default function Form({
	onSubmit,
	formClassName,
	inputClassName,
	buttonClassName,
	placeholder="Add a new item",
}) {

	const inputItemRef = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(e);
		inputItemRef.current.value = ""; // Clear the input field after submission
		inputItemRef.current.focus(); // Focus back on the input field
	};


	return (
		<div className={`${formClassName}`}>
			<form onSubmit={handleSubmit}>
				<input
					className={`${inputClassName}`}
					ref={inputItemRef}
					type="text"
					placeholder={placeholder}
					name="itemTitle"
				/>
				<input
					className={`${buttonClassName}`}
					type="submit"
					value={"Add"}
				/>
			</form>
		</div>
	);
}
