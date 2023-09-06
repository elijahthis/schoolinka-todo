import { ellipsisTruncator, formatTime } from "../../utils/helpers";
import { Task } from "../../utils/types";
import { DeleteIcon } from "../svgs";

interface TaskItemProps {
	taskData: Task;
	onClick: () => void;
	onSelect: (val: boolean) => void;
}

const TaskItem = ({ taskData, onClick, onSelect }: TaskItemProps) => {
	return (
		<div
			className="TaskItem flex flex-row items-center gap-3 text-sm bg-[#F9FAFB] border-b border-[#EAECF0] py-4 px-6 text-sm text-[#475467] cursor-pointer "
			onClick={onClick}
		>
			<span onClick={(e) => e.stopPropagation()}>
				<input
					type="checkbox"
					name=""
					id=""
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
			<p className="ml-auto TaskItem__right">Today</p>
		</div>
	);
};

export default TaskItem;
