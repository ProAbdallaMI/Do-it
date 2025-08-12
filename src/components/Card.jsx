import { useEffect, useRef, useState } from "react";
import CardItem from "./CardItem";
import Form from "./Form";
import { MdDelete } from "react-icons/md";

export default function Card({ cardId, title, date, items, onDelete, onEdit }) {
	// Initialize state for done items and undone items
	const [card, setCard] = useState({
		id: cardId,
		title: title,
		date: date,
		items: items,
	});

	const [doneItems, setDoneItems] = useState(
		items.filter((item) => item.isChecked)
	);
	const [undoneItems, setUndoneItems] = useState(
		items.filter((item) => !item.isChecked)
	);

	const render = useRef(false);

	useEffect(() => {
		setCard((prev) => ({
			...prev,
			items: [...doneItems, ...undoneItems],
		}));
	}, [doneItems, undoneItems]);

	useEffect(() => {
		// send edits to parent component
		onEdit(card);

		// re-render done and undone items
		if (render.current) {
			setDoneItems(card.items.filter((item) => item.isChecked));
			setUndoneItems(card.items.filter((item) => !item.isChecked));
			render.current = false;
		}
	}, [card]);

	const handleCardDeletion = () => {
		onDelete(card.id);
	};

	// Update doneItems and undoneItems whenever allItems changes
	const handleCardItemAddition = (e) => {
		if (!e.text.trim()) return;

		const newCardItem = {
			id: Date.now(),
			text: e.text,
			isChecked: false,
		};

		setUndoneItems((prev) => [...prev, newCardItem]);
	};

	const handleCardItemChange = (cardItem) => {
		// update either one of done or undone list
		setDoneItems((prev) =>
			prev.map((item) => (item.id == cardItem.id ? cardItem : item))
		);
		setUndoneItems((prev) =>
			prev.map((item) => (item.id == cardItem.id ? cardItem : item))
		);

		card.items.forEach((item) => {
			if (
				item.id == cardItem.id &&
				item.isChecked != cardItem.isChecked
			) {
				render.current = true;
			}
		});
	};

	const handleCardItemDeletion = (cardItemId) => {
		setDoneItems((prev) => prev.filter((item) => item.id != cardItemId));
		setUndoneItems((prev) => prev.filter((item) => item.id != cardItemId));
	};

	return (
		<div className="w-full bg-secondary pb-2 shadow-xs flex flex-col content-center items-center justify-center rounded-2xl text-[16px]">
			<div className="flex justify-between items-center w-full px-5 bg-cold">
				<span className="text-[10px] w-[45px] font-bold opacity-50">
					{date}
				</span>
				<h1 className="text-center font-bold p-[8px] w-full rounded-tl-2xl rounded-tr-2xl">
					{title}
				</h1>
				<MdDelete
					onClick={handleCardDeletion}
					className="cursor-pointer text-xl text-red-500 w-[45px]"
				/>
			</div>
			<div className="flex flex-col content-center items-center justify-center w-full px-5 mt-2 gap-1">
				{[...undoneItems].reverse().map((item) => (
					<CardItem
						key={item.id}
						id={item.id}
						text={item.text}
						checked={item.isChecked}
						setCardItem={handleCardItemChange}
						onDelete={handleCardItemDeletion}
					/>
				))}
				{doneItems.length > 0 && undoneItems.length > 0 && (
					<hr className="w-98/100 -ml-3 text-break" />
				)}
				{[...doneItems].reverse().map((item) => (
					<CardItem
						key={item.id}
						id={item.id}
						text={item.text}
						checked={item.isChecked}
						onDelete={handleCardItemDeletion}
						setCardItem={handleCardItemChange}
					/>
				))}
			</div>

			<Form
				onSubmit={handleCardItemAddition}
				formClassName={`w-full m-auto mt-3 mb-3 px-5 flex content-center justify-center items-center text-[14px]`}
				inputClassName={`w-80/100 p-1 border-1 rounded-tl-sm rounded-bl-sm border-adjacent outline-none`}
				buttonClassName={`w-20/100 p-1 text-white bg-primary rounded-tr-sm rounded-br-sm border-1 border-adjacent`}
			/>
		</div>
	);
}
