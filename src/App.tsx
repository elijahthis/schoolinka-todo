import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
