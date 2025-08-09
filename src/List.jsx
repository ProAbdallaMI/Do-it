import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

export default function List() {
	//const [cards, setCards] = useState(localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : []);
	const [cards, setCards] = useState([
		// {
		// 	id: 1,
		// 	title: "My First Card",
		// 	items: [
		// 		{ id: 1, text: "First Item", isChecked: false },
		// 		{ id: 2, text: "Second Item", isChecked: true },
		// 	],
		// },
	]);

	// handle adding a new card
	const handleNewCardAddition = (e) => {
		if (!e.text.trim()) return;

		const newCard = {
			id: cards.length + 1,
			title: e.text,
			items: [],
		};
		
		setCards((prevCards) => [...prevCards, newCard]);
		//localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
	};

	return (
		<div className="flex flex-col items-center justify-center">
			{/* add to do list cards button */}
			<Form
				onSubmit={handleNewCardAddition}
				formClassName={`w-[335px] h-[36px] m-auto mt-[38px] flex content-center items-center`}
				inputClassName={`w-[290px] p-[8px] border-1 rounded-tl-[10px] rounded-bl-[10px] border-adjacent outline-none`}
				buttonClassName={`w-[45px] p-[8px] bg-primary rounded-tr-[10px] rounded-br-[10px] border-1 border-adjacent`}
				placeholder="Add a new card"
			/>
			{/* to do list cards */}
			<div className="w-[335px] m-auto mt-[46px] flex flex-col content-center items-center gap-[20px]">
				{cards.map((card) => (
					<Card
						key={card.id}
						cardId={card.id}
						title={card.title}
						items={card.items}
					/>
				))}
			</div>
		</div>
	);
}
