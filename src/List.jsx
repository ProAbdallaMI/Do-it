import Card from "./components/Card";
import Form from "./components/Form";

export default function List() {
	const cards = [
		{
			title: "My card",
			items: [
				{ text: "this is first task", isChecked: false },
				{ text: "this is second task", isChecked: true },
				{ text: "this is third task", isChecked: false },
				{ text: "this is fourth task", isChecked: true },
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
				{cards.map((card, index) => (
					<Card key={index} title={card.title} items={card.items} />
				))}
			</div>
		</div>
	);
}
