import { useEffect, useState } from "react";
import { Task } from "../utils/types";
import { CalenderIcon, ClockIcon, CloseIcon, DarkBellIcon } from "./svgs";

export const AddTaskModal = ({
	edit = false,
	onClose,
	taskData,
}: {
	edit?: boolean;
	onClose: () => void;
	taskData?: Task | undefined;
}) => {
	const [taskTitle, setTaskTitle] = useState(edit ? taskData?.title : "");
	const [taskStartTime, setTaskStartTime] = useState("");
	const [taskEndTime, setTaskEndTime] = useState("");
	const [taskDate, setTaskDate] = useState("");

	useEffect(() => {
		if (taskData) {
			setTaskTitle(taskData.title);
			setTaskStartTime(taskData.startTime);
			setTaskEndTime(taskData.endTime || "");
		} else {
			setTaskTitle("");
			setTaskStartTime("");
			setTaskEndTime("");
		}
	}, [taskData]);

	return (
		<div className="bg-white p-6 ">
			<div className="flex flex-row itmes-center gap-3 justify-between mb-4 ">
				<h4 className="text-[18px] text-main-dark font-semibold leading-[28px]">
					{edit ? "Edit" : "Add"} Task
				</h4>
				<CloseIcon className="cursor-pointer" onClick={onClose} />
			</div>
			<textarea
				name=""
				id=""
				cols={30}
				className="py-3 px-[14px] rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] w-full mb-4 h-[140px] resize-none "
				placeholder="Task Title"
				value={taskTitle}
			></textarea>
			<div className="flex flex-row items-center gap-4 mb-4 ">
				<button
					className="flex flex-row items-center gap-2 border border-[#D0D5DD] bg-white rounded-lg py-[10px] px-4 text-sm font-semibold text-[#667085] mr-auto"
					style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
				>
					<CalenderIcon />
					Today
				</button>
				<button
					className="flex flex-row items-center gap-2 border border-[#D0D5DD] bg-white rounded-lg py-[10px] px-4 text-sm font-semibold text-[#667085] "
					style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
				>
					<ClockIcon />
					00:00
				</button>
				<button
					className="flex flex-row items-center gap-2 border border-[#D0D5DD] bg-white rounded-lg py-[10px] px-4 text-sm font-semibold text-[#667085] "
					style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
				>
					<ClockIcon />
					00:00
				</button>
			</div>
			<div className="flex flex-row items-center gap-2 ">
				<DarkBellIcon />
				<p className="mr-auto text-[#667085] ">10 Minutes before</p>
				<CloseIcon className="w-4 h-4 cursor-pointer" />
			</div>
			<div className="pt-8 grid grid-cols-2 gap-3">
				<ModalButton variant="outline" onClick={onClose}>
					Cancel
				</ModalButton>
				<ModalButton>Add</ModalButton>
			</div>
		</div>
	);
};

export const ViewTaskModal = () => {
	return <div></div>;
};

const ModalButton = ({
	children,
	variant = "fill",
	onClick,
}: {
	children: string;
	variant?: "fill" | "outline";
	onClick?: () => void;
}) => (
	<button
		className={`cursor-pointer w-full py-[10px] px-[18px] rounded-lg font-semibold border ${
			variant === "outline"
				? "bg-transparent text-sec-dark border-[#D0D5DD] "
				: "bg-pry-col text-white border-pry-col text-sm"
		}  `}
		style={{
			boxShadow:
				variant === "outline"
					? "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
					: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
		}}
		onClick={onClick}
	>
		{children}
	</button>
);
