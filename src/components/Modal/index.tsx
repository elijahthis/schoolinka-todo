interface ModalProps {
	open: boolean;
	children: JSX.Element | JSX.Element[];
}

const Modal = ({ children, open }: ModalProps) => {
	return (
		// <div className="z-20 fixed top-[219px] left-[968px] border border-[#F2F4F7] rounded-lg ">
		<div
			className={`z-20 absolute top-0 left-0 rounded-lg w-full ${
				open ? "border border-[#F2F4F7] " : ""
			} `}
		>
			{children}
		</div>
	);
};

export default Modal;
