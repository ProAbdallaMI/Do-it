import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

export default function CardItem({ id, text, checked, setCardItem, onDelete}) {
	const [cardItem, setCardItemState] = useState({
		id: id,
		text: text,
		isChecked: checked,
	});

	useEffect(() => {
		setCardItem(cardItem);
	}, [cardItem]);

	const handleInputChange = (e) => {
		setCardItemState((prev) => {
			const updatedCardItem = {
				...prev,
				text: e.target.value,
			};
			return updatedCardItem;
		});
	};

	const handleCheckboxClick = () => {
		setCardItemState((prev) => {
			const updatedCardItem = {
				...prev,
				isChecked: !prev.isChecked,
			};
			return updatedCardItem;
		});
	};

	const handleCardItemDeletion = () => {
		onDelete(cardItem.id);
	};

	return (
		<div className="flex items-center content-center justify-between w-full h-[30px]">
			<input
				onChange={handleInputChange}
				value={cardItem.text}
				type="text"
				className="w-full h-full border-none outline-none"
			/>
			<MdDelete
				onClick={handleCardItemDeletion}
				className="cursor-pointer text-md text-red-400 w-[35px]"
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
