import Footer from "./Footer";
import List from "./List";
import Navbar from "./Navbar";

const PublicLayout = () => {
	return (
		<div className="flex flex-col mb-5 px-5 min-w-[320px]">
			<Navbar />
			<List />
			<Footer />
		</div>
	);
};

export default PublicLayout;
