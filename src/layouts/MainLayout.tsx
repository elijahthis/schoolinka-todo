import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
	return (
		<main>
			<Header />
			<div className="min-h-screen px-4 pt-[73px] lg:px-[82px] lg:pt-[73px]">
				<Outlet />
			</div>
		</main>
	);
};

export default MainLayout;
