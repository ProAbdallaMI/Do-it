import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import formatDate from "./utility/date";

export default function List() {
	const [cards, setCards] = useState(localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : []);


	useEffect(() => {
		localStorage.setItem("cards", JSON.stringify(cards));
	}, [cards]);

	// handle adding a new card
	const handleNewCardAddition = (e) => {
		if (!e.text.trim()) return;

		const newCard = {
			id: cards.length + 1,
			title: e.text,
			date: formatDate(new Date()),
			items: [],
		};

		setCards((prevCards) => [...prevCards, newCard]);
		//localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
	};

	// handle editing a card
	const handleCardEdition = (card) => {
		setCards((prevCards) =>
			prevCards.map((c) => (c.id == card.id ? card : c))
		);
	};

	const handleCardDeletion = (cardId) => {
		setCards((prevCards) => prevCards.filter((c) => c.id != cardId));
	};

	return (
		<div className="flex flex-col items-center justify-center">
			{/* add to do list cards button */}
			<Form
				onSubmit={handleNewCardAddition}
				formClassName={`w-[335px] h-[36px] m-auto mt-[38px] flex content-center items-center`}
				inputClassName={`w-[290px] p-[8px] border-1 rounded-tl-[10px] rounded-bl-[10px] border-adjacent outline-none`}
				buttonClassName={`w-[45px] p-[8px] text-white bg-primary rounded-tr-[10px] rounded-br-[10px] border-1 border-adjacent`}
				placeholder="Add a new card"
			/>
			{/* to do list cards */}
			<div className="w-[335px] m-auto mt-[46px] flex flex-col content-center items-center gap-[20px]">
				{[...cards].reverse().map((card) => (
					<Card
						key={card.id}
						cardId={card.id}
						title={card.title}
						date={card.date}
						items={card.items}
						onEdit={handleCardEdition}
						onDelete={handleCardDeletion}
					/>
				))}
			</div>
		</div>
	);
}
