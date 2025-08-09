import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import Form from "./Form";
import { MdDelete } from "react-icons/md";

export default function Card({ cardId, title, items, onDelete, onEdit }) {
	// Initialize state for done items and undone items
	const [card, setCard] = useState({
		id: cardId,
		title: title,
		items: items,
	});

	const [doneItems, setDoneItems] = useState(
		items.filter((item) => item.isChecked)
	);
	const [undoneItems, setUndoneItems] = useState(
		items.filter((item) => !item.isChecked)
	);

	useEffect(() => {
		setCard((prev) => ({
			...prev,
			items: [...doneItems, ...undoneItems],
		}));
	}, [doneItems, undoneItems]);

	useEffect(() => {
		onEdit(card);
	}, [card]);

	const handleCardDeletion = () => {
		onDelete(card.id);
	};

	// Update doneItems and undoneItems whenever allItems changes
	const handleCardItemAddition = (e) => {
		if (!e.text.trim()) return;

		const newCardItem = {
			id: doneItems.length + undoneItems.length + 1,
			text: e.text,
			isChecked: false,
		};

		setUndoneItems((prev) => [...prev, newCardItem]);
	};

	const handleCardItemChange = (cardItem) => {
		if (cardItem.isChecked) {
			setDoneItems((prev) => [...prev, cardItem]);
			setUndoneItems((prev) =>
				prev.filter((item) => item.id != cardItem.id)
			);
		} else {
			setUndoneItems((prev) => [...prev, cardItem]);
			setDoneItems((prev) =>
				prev.filter((item) => item.id != cardItem.id)
			);
		}
	};

	return (
		<div className="w-[325px] bg-secondary pb-[10px] shadow-xs flex flex-col content-center items-center justify-center rounded-[10px] text-[16px]">
			<div className="flex justify-between items-center w-full px-[10px]">
				<h1 className="bg-cold text-center font-bold p-[8px] w-full rounded-tl-[10px] rounded-tr-[10px]">
					{title}
				</h1><MdDelete onClick={handleCardDeletion} className="cursor-pointer" />
			</div>
			<div className="flex flex-col content-center items-center justify-center w-full px-[10px] mt-[5px] gap-1">
				{undoneItems.map((item) => (
					<CardItem
						key={item.id}
						id={item.id}
						text={item.text}
						checked={item.isChecked}
						setCardItem={handleCardItemChange}
					/>
				))}
				{doneItems.length > 0 && undoneItems.length > 0 && (
					<hr className="w-[305px] text-break" />
				)}
				{doneItems.map((item) => (
					<CardItem
						key={item.id}
						id={item.id}
						text={item.text}
						checked={item.isChecked}
						setCardItem={handleCardItemChange}
					/>
				))}
			</div>

			<Form
				onSubmit={handleCardItemAddition}
				formClassName={`w-[325px] h-[36px] m-auto mt-[11px] flex content-center justify-center items-center text-[14px]`}
				inputClassName={`w-[260px] p-[4px] border-1 rounded-tl-[5px] rounded-bl-[5px] border-adjacent outline-none`}
				buttonClassName={`p-[4px] bg-primary rounded-tr-[5px] rounded-br-[5px] border-1 border-adjacent w-[45px]`}
			/>
		</div>
	);
}
