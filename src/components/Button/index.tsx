interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button
			className={`py-[10px] px-4 border border-pry-col bg-pry-col text-white rounded-lg font-semibold text-sm cursor-pointe  `}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
