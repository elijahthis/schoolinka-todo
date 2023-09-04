import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
	return (
		<main>
			<Header />
			<div className="pt-[73px] min-h-screen px-[82px]">
				<Outlet />
			</div>
		</main>
	);
};

export default MainLayout;
