import Cart from "./Cart";
import Form from "./Form";

export default function List() {
	const carts = [
		{
			title: "My Cart",
			items: [
				{ text: "this is first task", checked: false },
				{ text: "this is second task", checked: true },
				{ text: "this is third task", checked: false },
				{ text: "this is fourth task", checked: true },
			],
		},
	];

	return (
		<div className="flex flex-col items-center justify-center">
			{/* add to do list carts button */}
			<Form
				formClassName={`w-[335px] h-[36px] m-auto mt-[38px] flex content-center items-center`}
				inputClassName={`w-[290px] p-[8px] border-1 rounded-tl-[10px] rounded-bl-[10px] border-adjacent outline-none`}
				buttonClassName={`-ml-[1px] p-[8px] bg-primary rounded-tr-[10px] rounded-br-[10px] border-1 border-adjacent`}
			/>
			{/* to do list carts */}
			<div className="w-[335px] m-auto mt-[46px] flex flex-col content-center items-center">
				{carts.map((cart, index) => (
					<Cart key={index} title={cart.title} items={cart.items} />
				))}
			</div>
		</div>
	);
}
