import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function CardItem({ id, text, checked, setCardItem }) {
	
	const [cardItem, setCardItemState] = useState({
		id: id,
		text: text,
		isChecked: checked,
	});

	const handleInputChange = (e) => {
		setCardItemState((prev) => {
			const updatedCardItem = {
				...prev,
				text: e.target.value,
			};
			setCardItem(updatedCardItem);
			return updatedCardItem;
		});
	};

	const handleCheckboxClick = () => {
		setCardItemState((prev) => {
			const updatedCardItem = {
				...prev,
				isChecked: !prev.isChecked,
			};
			setCardItem(updatedCardItem);
			return updatedCardItem;
		});
	};
	

	return (
		<div className="flex items-center content-center justify-between w-full h-[30px]">
			<input
				onChange={handleInputChange}
				value={cardItem.text}
				type="text"
				className="w-full h-full border-none outline-none"
			/>
			<button
				onClick={handleCheckboxClick}
				className="flex items-center justify-center w-[40px] h-[40px]"
			>
				{cardItem.isChecked ? (
					<MdCheckBox className="text-primary w-[20px] h-[20px]" />
				) : (
					<MdCheckBoxOutlineBlank className="w-[20px] h-[20px]" />
				)}
			</button>
		</div>
	);
}
