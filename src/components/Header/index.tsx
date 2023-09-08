import { Link } from "react-router-dom";
import { BellIcon, HamBurgerIcon, SettingsIcon } from "../svgs";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

const Header = () => {
	return (
		<header className="flex flex-row itmes-center gap-4 justify-between lg:py-4 lg:px-[82px] py-5 px-4 border-b border-[#EAECF0] fixed top-0 left-0 w-full bg-white z-30 ">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<div className="flex flex-row items-center gap-1">
				<span className="p-[10px] lg:inline-block hidden">
					<SettingsIcon />
				</span>
				<span className="p-[10px] lg:inline-block hidden">
					<BellIcon />
				</span>
				<img
					src={avatar}
					alt="avatar"
					className="ml-3 lg:inline-block hidden"
				/>
				<span className="cursor-pointer lg:hidden inline ">
					<HamBurgerIcon />
				</span>
			</div>
		</header>
	);
};

export default Header;
