import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function CardItem({ text, checked }) {
	const [value, setValue] = useState(text);
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleCheckboxClick = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="flex items-center content-center justify-between w-full h-[30px]">
			<input
				onChange={handleChange}
				value={value}
				type="text"
				className="w-full h-full border-none outline-none"
			/>
			<button onClick={handleCheckboxClick} className="flex items-center justify-center w-[30px] h-[30px]">
				{isChecked ? (
					<MdCheckBoxOutlineBlank className="w-[20px] h-[20px]" />
				) : (
					<MdCheckBox className="text-primary w-[20px] h-[20px]" />
				)}
			</button>
		</div>
	);
}
