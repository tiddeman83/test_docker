import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios({
			method: "get",
			url: "/api",
		})
			.then((response) => {
				setData(response.data);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [data]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
