import { useState } from "react";

export default function Form({
	onSubmit,
	formClassName,
	inputClassName,
	buttonClassName,
	placeholder="Add a new item",
}) {

	const [itemTitle, setItemTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(e);
		setItemTitle(""); // Clear the input field after submission
	};

	const handleItemTitleChange = (e) => {
		setItemTitle(e.target.value);
	};

	return (
		<div className={`${formClassName}`}>
			<form onSubmit={handleSubmit}>
				<input
					className={`${inputClassName}`}
					value={itemTitle}
					onChange={handleItemTitleChange}
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
