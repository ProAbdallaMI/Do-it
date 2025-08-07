export default function Form({
	onSubmit,
	formClassName,
	inputClassName,
	buttonClassName,
}) {
	return (
		<div className={`${formClassName}`}>
			<form onSubmit={onSubmit}>
				<input
					className={`${inputClassName}`}
					type="text"
					placeholder="Add To-do-list Title"
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
