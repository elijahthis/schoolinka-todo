import { ellipsisTruncator, formatTime, isToday } from "../../utils/helpers";
import { Task } from "../../utils/types";
import { DeleteIcon } from "../svgs";

interface TaskItemProps {
	taskData: Task;
	onClick: () => void;
	onSelect: (val: boolean) => void;
	swapItems: (sourceIndex: number, targetIndex: number) => void;
	taskList: Task[];
}

const TaskItem = ({
	taskData,
	onClick,
	onSelect,
	swapItems,
	taskList,
}: TaskItemProps) => {
	let touchStartY: number | null = null;
	let touchMoveY: number | null = null;
	let draggedItemId: number | null = null;

	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();

		const targetTaskId = taskData.id;
		const sourceTaskId = e.dataTransfer.getData("text/plain");
		if (Number(sourceTaskId) !== targetTaskId) {
			const sourceIndex = taskList.findIndex(
				(task: Task) => task.id === Number(sourceTaskId)
			);
			const targetIndex = taskList.findIndex(
				(task: Task) => task.id === targetTaskId
			);

			swapItems(sourceIndex, targetIndex);
		}
	};
	const onTouchEnd = (
		e: React.TouchEvent<HTMLDivElement>,
		targetTaskId: number
	) => {
		if (touchStartY !== null && touchMoveY !== null) {
			const deltaY = touchMoveY - touchStartY;
			if (deltaY > 50) {
				// Perform the reordering here
				const sourceIndex = taskList.findIndex(
					(task: Task) => task.id === draggedItemId
				);
				const targetIndex = taskData.id;

				swapItems(sourceIndex, targetIndex);
			}
		}
		touchStartY = null;
		touchMoveY = null;
		draggedItemId = null;
	};
	return (
		<div
			className="TaskItem flex flex-row items-center gap-3 text-sm bg-[#F9FAFB] border-b border-[#EAECF0] py-4 px-6 text-sm text-[#475467] cursor-pointer "
			onClick={onClick}
			// drag and drop functionality
			draggable={true}
			onDragStart={(e) => {
				e.dataTransfer.setData("text/plain", taskData.id.toString());
			}}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={onDrop}
			// drag and drop functionality --- mobile
			onTouchStart={(e) => {
				touchStartY = e.touches[0].clientY;
				draggedItemId = taskData.id;
			}}
			onTouchMove={(e) => {
				if (touchStartY !== null) {
					touchMoveY = e.touches[0].clientY;
				}
			}}
			onTouchEnd={(e) => onTouchEnd(e, taskData.id)}
		>
			<span onClick={(e) => e.stopPropagation()}>
				<input
					type="checkbox"
					name=""
					id=""
					aria-label="Complete Task"
					checked={taskData.completed}
					onChange={(e) => {
						onSelect(e.target.checked);
					}}
				/>
			</span>
			<div className="flex flex-col items-start gap-1">
				<p
					className={`font-medium  ${
						taskData.completed
							? "text-[#D0D5DD] line-through"
							: "text-main-dark"
					} transition-all duration-300 `}
				>
					{ellipsisTruncator(taskData.title, 28)}
				</p>
				<p
					className={`${
						taskData.completed
							? "text-[#D0D5DD] line-through"
							: "text-[#475467]"
					} transition-all duration-300 `}
				>{`${formatTime(new Date(taskData.startTime))}${
					taskData.endTime ? ` - ${formatTime(new Date(taskData.endTime))}` : ""
				}`}</p>
			</div>
			<p className="ml-auto TaskItem__right">
				{isToday(new Date(taskData.startTime))
					? "Today"
					: new Date(taskData.startTime).toDateString().slice(4, 10)}
			</p>
		</div>
	);
};

export default TaskItem;
