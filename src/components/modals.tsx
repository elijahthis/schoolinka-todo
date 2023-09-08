import { useContext, useEffect, useState } from "react";
import { Task } from "../utils/types";
import { CalenderIcon, ClockIcon, CloseIcon, DarkBellIcon } from "./svgs";
import useTasks from "../hooks/useTasks";
import { taskContext } from "../contexts/taskContext";
import CompletedBadge from "./CompletedBadge";
import {
	addHours,
	ellipsisTruncator,
	formatDateWithSuffix,
	formatTime,
} from "../utils/helpers";
import MUITimePicker from "./MUITimePicker";
import MUIDatePicker from "./MUIDatePicker";

// ----------------------------------------- AddTaskModal -----------------------------------------
interface AddTaskModalProps {
	edit?: boolean;
	onClose: () => void;
	taskData?: Task | undefined;
}
export const AddTaskModal = ({
	edit = false,
	onClose,
	taskData,
}: AddTaskModalProps) => {
	const defaultTaskValues: Task = {
		id: 0,
		userId: 2,
		title: "",
		startTime: new Date().toISOString(),
		endTime: addHours(new Date(), 1).toISOString(),
		completed: false,
	};

	const [currentData, setCurrentData] = useState<Task>(
		edit && taskData ? taskData : defaultTaskValues
	);
	const [today, setToday] = useState(
		edit ? taskData?.startTime : new Date().toISOString()
	);

	const { taskList, setTaskList, addTask, deleteTask, updateTask } =
		useContext(taskContext);

	useEffect(() => {
		if (taskData) {
			setCurrentData(taskData);
		} else {
			setCurrentData(defaultTaskValues);
		}
	}, [taskData]);

	const submitTask = () => {
		if (edit) {
			updateTask(currentData.id, currentData);
		} else {
			addTask({ ...currentData, id: taskList.length + 1 });
		}

		onClose();
	};

	return (
		<div className="bg-white p-6 ">
			<div className="flex flex-row items-center gap-3 gap-2 mb-4 ">
				<h4>{edit ? "Edit" : "Add"} Task</h4>
				{edit && currentData?.completed && <CompletedBadge />}
				<CloseIcon className="cursor-pointer ml-auto" onClick={onClose} />
			</div>
			<textarea
				name=""
				id=""
				cols={30}
				className="py-3 px-[14px] rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] w-full mb-4 h-[140px] resize-none "
				placeholder="Task Title"
				value={currentData.title}
				onChange={(e) =>
					setCurrentData({ ...currentData, title: e.target.value })
				}
			></textarea>
			<div className="flex flex-row items-center gap-4 mb-4 ">
				<div className="mr-2">
					<MUIDatePicker
						value={today}
						onChange={(newValue) => {
							// update startTime
							let startTime = new Date(newValue?.$d);
							startTime.setHours(new Date(currentData.startTime).getHours());
							startTime.setMinutes(
								new Date(currentData.startTime).getMinutes()
							);

							// update endTime
							if (currentData.endTime) {
								let endTime = new Date(newValue?.$d);
								endTime.setHours(new Date(currentData.endTime).getHours());
								endTime.setMinutes(new Date(currentData.endTime).getMinutes());

								setCurrentData({
									...currentData,
									startTime: startTime.toISOString(),
									endTime: endTime.toISOString(),
								});
							} else {
								setCurrentData({
									...currentData,
									startTime: startTime.toISOString(),
								});
							}

							setToday(newValue?.$d?.toISOString());
						}}
					/>
				</div>

				<MUITimePicker
					value={currentData?.startTime}
					onChange={(newValue: any) => {
						setCurrentData({
							...currentData,
							startTime: newValue?.$d?.toISOString(),
						});
					}}
				/>
				<MUITimePicker
					value={currentData?.endTime}
					onChange={(newValue: any) => {
						setCurrentData({
							...currentData,
							endTime: newValue?.$d?.toISOString(),
						});
					}}
				/>
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
				<ModalButton onClick={() => submitTask()}>
					{edit ? "Save" : "Add"}
				</ModalButton>
			</div>
		</div>
	);
};

// ----------------------------------------- ViewTaskModal -----------------------------------------
interface ViewTaskModalProps {
	taskData: Task | undefined;
	openDeleteModal: () => void;
	openEditModal: () => void;
	onClose: () => void;
}
export const ViewTaskModal = ({
	taskData,
	openDeleteModal,
	openEditModal,
	onClose,
}: ViewTaskModalProps) => {
	return (
		<div className="px-6 py-5 w-full">
			<div className="mb-4 flex flex-row items-center justify-end">
				{taskData?.completed && <CompletedBadge />}
				<CloseIcon
					className="cursor-pointer ml-auto"
					onClick={() => onClose()}
				/>
			</div>
			<h4 className="mb-8">{ellipsisTruncator(taskData?.title ?? "", 32)}</h4>
			<div className="mb-[34px] flex flex-col items-start gap-2">
				<div className="flex flex-row items-center gap-2">
					<CalenderIcon className="text-pry-col" />
					<p className="font-medium text-[#272727]">
						{/* write as 20th January, 2023 */}
						{formatDateWithSuffix(new Date(taskData?.startTime ?? ""))}
					</p>
				</div>
				<div className="flex flex-row items-center gap-2">
					<ClockIcon className="text-pry-col" />
					<p className="font-medium text-[#272727]">{`${formatTime(
						new Date(taskData?.startTime ?? "")
					)}${
						taskData?.endTime
							? ` - ${formatTime(new Date(taskData.endTime))}`
							: ""
					}`}</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-3">
				<ModalButton variant="outline" onClick={() => openDeleteModal()}>
					Delete
				</ModalButton>
				<ModalButton onClick={() => openEditModal()}>Edit</ModalButton>
			</div>
		</div>
	);
};

// ----------------------------------------- DeleteTaskModal -----------------------------------------
interface DeleteTaskModalProps {
	taskData: Task | undefined;
	onClose: () => void;
	cancelFunc: () => void;
	deleteFunc: () => void;
}
export const DeleteTaskModal = ({
	taskData,
	onClose,
	cancelFunc,
	deleteFunc,
}: DeleteTaskModalProps) => {
	return (
		<div className="p-6">
			<div className="mb-2 flex flex-row items-center justify-end">
				{taskData?.completed && <CompletedBadge />}
				<CloseIcon className="cursor-pointer ml-auto" />
			</div>
			<h4 className="mb-3">Delete Task</h4>
			<p className="mb-6">
				Are you sure you want to delete "{taskData?.title}"
			</p>
			<div className="grid grid-cols-2 gap-3">
				<ModalButton variant="outline" onClick={() => cancelFunc()}>
					Cancel
				</ModalButton>
				<ModalButton variant="delete" onClick={() => deleteFunc()}>
					Delete
				</ModalButton>
			</div>
		</div>
	);
};

// ----------------------------------------- Other -----------------------------------------
// ModalButton
interface ModalButtonProps {
	children: string;
	variant?: "fill" | "outline" | "delete";
	onClick?: () => void;
}
const ModalButton = ({
	children,
	variant = "fill",
	onClick,
}: ModalButtonProps) => {
	return (
		<button
			className={`cursor-pointer w-full py-[10px] px-[18px] rounded-lg font-semibold border ${
				variant === "outline"
					? "bg-transparent text-sec-dark border-[#D0D5DD] "
					: variant === "delete"
					? "bg-[#ef4444] text-white border-[#ef4444] text-sm"
					: "bg-pry-col text-white border-pry-col text-sm"
			}  `}
			style={{
				boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
