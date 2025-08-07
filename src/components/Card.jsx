import { useState } from "react";
import CardItem from "./CardItem";
import Form from "./Form";

export default function Card({ title, items }) {
	// Initialize state for done items and undone items
	const [doneItems, setDoneItems] = useState(
		items.filter((item) => item.isChecked)
	);
	const [undoneItems, setUndoneItems] = useState(
		items.filter((item) => !item.isChecked)
	);
	

	// Update doneItems and undoneItems whenever allItems changes
	const handleListItemAddition = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const newItem = {text: formData.get("itemTitle"), checked: false};
		if (!newItem.text.trim()) return;

		setUndoneItems((prev) => [...prev, newItem]);
	};


	return (
		<div className="w-[325px] bg-secondary pb-[10px] shadow-xs flex flex-col content-center items-center justify-center rounded-[10px] text-[16px]">
			<h1 className="bg-cold text-center font-bold p-[8px] w-full rounded-tl-[10px] rounded-tr-[10px]">
				{title}
			</h1>
			<div className="flex flex-col content-center items-center justify-center w-full px-[10px] mt-[5px] gap-1">
				{undoneItems.map((item, index) => (
					<CardItem
						key={index}
						text={item.text}
						isChecked={item.isChecked}
					/>
				))}
				{doneItems.length > 0 && undoneItems.length > 0 && (
					<hr className="w-[305px] text-break" />
				)}
				{doneItems.map((item, index) => (
					<CardItem
						key={index}
						text={item.text}
						isChecked={item.isChecked}
					/>
				))}
			</div>

			<Form
				onSubmit={handleListItemAddition}
				formClassName={`w-[325px] h-[36px] m-auto mt-[11px] flex content-center justify-center items-center text-[14px]`}
				inputClassName={`w-[260px] p-[4px] border-1 rounded-tl-[5px] rounded-bl-[5px] border-adjacent outline-none`}
				buttonClassName={`p-[4px] bg-primary rounded-tr-[5px] rounded-br-[5px] border-1 border-adjacent w-[45px]`}
			/>
		</div>
	);
}
