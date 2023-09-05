import { ellipsisTruncator } from "../../utils/helpers";
import { Task } from "../../utils/types";

interface TaskItemProps {
	taskData: Task;
	onClick: () => void;
	onSelect: (val: boolean) => void;
}

const TaskItem = ({ taskData, onClick, onSelect }: TaskItemProps) => {
	return (
		<div
			className="flex flex-row items-center gap-3 text-sm bg-[#F9FAFB] border-b border-[#EAECF0] py-4 px-6 text-sm text-[#475467] cursor-pointer "
			onClick={onClick}
		>
			<input
				type="checkbox"
				name=""
				id=""
				checked={taskData.completed}
				onChange={(e) => {
					onSelect(e.target.checked);
				}}
			/>
			<div className="flex flex-col items-start gap-1">
				<p
					className={`font-medium  ${
						taskData.completed
							? "text-[#D0D5DD] line-through"
							: "text-main-dark"
					} `}
				>
					{ellipsisTruncator(taskData.title, 28)}
				</p>
				<p
					className={`${
						taskData.completed
							? "text-[#D0D5DD] line-through"
							: "text-[#475467]"
					}`}
				>{`${taskData.startTime}${
					taskData.endTime ? ` - ${taskData.endTime}` : ""
				}`}</p>
			</div>
			<p className="ml-auto">Today</p>
		</div>
	);
};

export default TaskItem;
