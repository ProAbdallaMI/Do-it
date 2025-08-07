import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<List />
			<Footer />
		</div>
	);
}

export default App;
