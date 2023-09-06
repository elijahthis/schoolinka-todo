interface ModalProps {
	children: JSX.Element | JSX.Element[];
}

const Modal = ({ children }: ModalProps) => {
	return (
		// <div className="z-20 fixed top-[219px] left-[968px] border border-[#F2F4F7] rounded-lg ">
		<div className="z-20 absolute top-0 left-0 border border-[#F2F4F7] rounded-lg w-full ">
			{children}
		</div>
	);
};

export default Modal;
