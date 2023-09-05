interface TaskItemProps {
	title: string;
	startTime: string;
	endTime?: string;
	onClick: () => void;
}

const TaskItem = ({ title, startTime, endTime, onClick }: TaskItemProps) => {
	return (
		<div
			className="flex flex-row items-center gap-3 text-sm bg-[#F9FAFB] border-b border-[#EAECF0] py-4 px-6 text-sm text-[#475467] cursor-pointer "
			onClick={onClick}
		>
			<input type="checkbox" name="" id="" />
			<div className="flex flex-col items-start gap-1">
				<p className="font-medium text-main-dark ">{title}</p>
				<p className="">{`${startTime}${endTime ? ` - ${endTime}` : ""}`}</p>
			</div>
			<p className="ml-auto">Today</p>
		</div>
	);
};

export default TaskItem;
