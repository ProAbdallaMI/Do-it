import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function cardItem({ text, checked }) {
	return (
		<div className="flex items-center content-center justify-between w-full h-[30px]">
			<p>{text}</p>
			{checked ? (
				<MdCheckBoxOutlineBlank className="w-[20px] h-[20px]" />
			) : (
				<MdCheckBox className="text-primary w-[20px] h-[20px]" />
			)}
		</div>
	);
}
