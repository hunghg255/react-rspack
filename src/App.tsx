import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { DatePicker } from 'antd';

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
					<img src={'/logo512.png'} className="logo react" alt="React logo" />
				</a>
			</div>
			<DatePicker />
			<h1>Rspack + React + TypeScript 11</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
		</div>
	);
}

export default App;
