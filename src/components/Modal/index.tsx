interface ModalProps {
	children: JSX.Element | JSX.Element[];
	open: boolean;
	onClose: () => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {
	return (
		<div className="z-20 fixed top-[219px] left-[968px] border border-[#F2F4F7] rounded-lg ">
			{open ? children : <></>}
		</div>
	);
};

export default Modal;
