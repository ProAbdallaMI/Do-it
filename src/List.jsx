import Card from "./components/Card";
import Form from "./components/Form";

export default function List() {
	const cards = [
		{
			id: 1,
			title: "My card",
			items: [
				{ id: 1, text: "this is first task", isChecked: false },
				{ id: 2, text: "this is second task", isChecked: true },
				{ id: 3, text: "this is third task", isChecked: false },
				{ id: 4, text: "this is fourth task", isChecked: true },
			],
		},
	];

	return (
		<div className="flex flex-col items-center justify-center">
			{/* add to do list cards button */}
			<Form
				formClassName={`w-[335px] h-[36px] m-auto mt-[38px] flex content-center items-center`}
				inputClassName={`w-[290px] p-[8px] border-1 rounded-tl-[10px] rounded-bl-[10px] border-adjacent outline-none`}
				buttonClassName={`w-[45px] p-[8px] bg-primary rounded-tr-[10px] rounded-br-[10px] border-1 border-adjacent`}
				placeholder="Add a new card"
			/>
			{/* to do list cards */}
			<div className="w-[335px] m-auto mt-[46px] flex flex-col content-center items-center gap-[20px]">
				{cards.map((card) => (
					<Card key={card.id} title={card.title} items={card.items} />
				))}
			</div>
		</div>
	);
}
