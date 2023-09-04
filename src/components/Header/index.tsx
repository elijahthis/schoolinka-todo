import { Link } from "react-router-dom";
import { BellIcon, SettingsIcon } from "../svgs";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

const Header = () => {
	return (
		<header className="flex flex-row itmes-center gap-4 justify-between py-4 px-[82px] border-b border-[#EAECF0] fixed top-0 left-0 w-full bg-white ">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<div className="flex flex-row items-center gap-1">
				<span className="p-[10px]">
					<SettingsIcon />
				</span>
				<span className="p-[10px]">
					<BellIcon />
				</span>
				<img src={avatar} alt="avatar" className="ml-3" />
			</div>
		</header>
	);
};

export default Header;
