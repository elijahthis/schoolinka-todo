import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import PaginationComponent from "../components/PaginationComponent";
import ScrollableCalendar from "../components/ScrollableCalendar";
import TaskItem from "../components/TaskItem";
import { AddTaskModal } from "../components/modals";
import { AddIcon } from "../components/svgs";
import { taskList } from "../utils/constants";
import { Task } from "../utils/types";

const Home = () => {
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
	const [editTask, setEditTask] = useState(false);
	const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

	return (
		<>
			<div>
				<div className="flex flex-row items-start gap-4 justify-between pt-12 mb-8 ">
					<div className="flex flex-col items-start gap-1 ">
						<h1>Good morning!</h1>
						<p>You got some task to do.</p>
					</div>
					<Button
						onClick={() => {
							setOpenAddTaskModal(true);
						}}
					>
						<div className="flex flex-row items-center gap-2">
							<AddIcon />
							<div>Create New Task</div>
						</div>
					</Button>
				</div>
				<div className="w-[862px] pr-5 border-r border-[#EAECF0]">
					<div className="mb-8">
						<ScrollableCalendar />
					</div>
					<div>
						<h2 className="mb-4">My Tasks</h2>
						<div className="flex flex-col items-stretch gap-4 mb-8 ">
							{taskList.map((taskItem, ind) => (
								<TaskItem
									title={taskItem.title}
									startTime={taskItem.startTime}
									endTime={taskItem.endTime}
									key={ind}
									onClick={() => {
										setEditTask(true);
										setSelectedTask(taskItem);
										setOpenAddTaskModal(true);
									}}
								/>
							))}
						</div>

						<div className="mb-24 pt-5 border-t border-[#EAECF0] ">
							<PaginationComponent handlePageClick={() => {}} pageCount={10} />
						</div>
					</div>
				</div>
			</div>
			<Modal open={openAddTaskModal} onClose={() => setOpenAddTaskModal(false)}>
				<AddTaskModal
					onClose={() => setOpenAddTaskModal(false)}
					edit={editTask}
					taskData={selectedTask}
				/>
			</Modal>
		</>
	);
};

export default Home;
