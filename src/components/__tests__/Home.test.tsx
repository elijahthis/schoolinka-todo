import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import { taskList } from "../../utils/constants";

const navList = ["Home", "Wallet", "Account"];
const routeList: { label: string; route: string; icon: JSX.Element }[] = [
	{ label: "Home", route: "/", icon: <></> },
	{ label: "Wallet", route: "/wallet", icon: <></> },
	{ label: "Account", route: "/account", icon: <></> },
];
const routeList_2: { label: string; route: string; icon: JSX.Element }[] = [
	{
		label: "Customer Support",
		route: "/customer-support",
		icon: <></>,
	},
	{ label: "Settings", route: "/settings", icon: <></> },
];

test("renders the Home page", () => {
	render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
});
