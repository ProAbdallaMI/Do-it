import Footer from "./Footer";
import List from "./List";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="flex flex-col mb-5">
			<Navbar />
			<List />
			<Footer />
		</div>
	);
}

export default App;
