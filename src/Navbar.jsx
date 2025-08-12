import { CgProfile } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
	return (
		<nav className="w-full mt-[20px] flex content-center items-center justify-between">
			<div className="flex content-center items-center gap-[30px]">
				<LuMenu className="w-[30px] h-[30px]" />
				<h1 className="text-[26px] font-bold">Do it</h1>
			</div>
            <div className="">
                <CgProfile className="w-[40px] h-[40px]" />
            </div>
		</nav>
	);
}
