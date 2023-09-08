interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	onClick?: () => void;
	className?: string;
}

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
	return (
		<button
			className={`py-[10px] px-4 border border-pry-col bg-pry-col text-white rounded-lg font-semibold text-sm cursor-pointer ${className}  `}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
