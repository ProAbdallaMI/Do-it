import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function CardItem({ id, text, checked, setCardItem }) {
	const [value, setValue] = useState(text);
	const [isChecked, setIsChecked] = useState(checked);

	const handleInputChange = (e) => {
		setValue(e.target.value);
		setCardItem({
			id: id,
			text: e.target.value,
			isChecked: isChecked,
		});
	};

	const handleCheckboxClick = () => {
		setIsChecked(!isChecked);
		setCardItem({
			id: id,
			text: value,
			isChecked: !isChecked,
		});
	};

	

	return (
		<div className="flex items-center content-center justify-between w-full h-[30px]">
			<input
				onChange={handleInputChange}
				value={value}
				type="text"
				className="w-full h-full border-none outline-none"
			/>
			<button
				onClick={handleCheckboxClick}
				className="flex items-center justify-center w-[40px] h-[40px]"
			>
				{isChecked ? (
					<MdCheckBox className="text-primary w-[20px] h-[20px]" />
				) : (
					<MdCheckBoxOutlineBlank className="w-[20px] h-[20px]" />
				)}
			</button>
		</div>
	);
}
