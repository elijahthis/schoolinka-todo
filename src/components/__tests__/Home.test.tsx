import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import { taskList } from "../../utils/constants";

test("renders the Home page", () => {
	render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
});
