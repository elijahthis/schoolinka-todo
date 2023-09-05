import { useContext, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import PaginationComponent from "../components/PaginationComponent";
import ScrollableCalendar from "../components/ScrollableCalendar";
import TaskItem from "../components/TaskItem";
import { AddTaskModal } from "../components/modals";
import { AddIcon } from "../components/svgs";
import { Task } from "../utils/types";
import { taskContext } from "../contexts/taskContext";
import usePaginate from "../hooks/usePaginate";

const Home = () => {
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
	const [editTask, setEditTask] = useState(false);
	const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

	const { taskList, setTaskList, addTask, deleteTask, updateTask } =
		useContext(taskContext);

	const itemsPerPage = 7;
	const { currentItems, pageCount, handlePageClick } = usePaginate(
		itemsPerPage,
		taskList
	);

	return (
		<>
			<div>
				<div className="flex flex-row items-start gap-4 justify-between pt-12 mb-8 ">
					<div className="flex flex-col items-start gap-1 ">
						<h1>Good morning!</h1>
						<p>You've got some tasks to do.</p>
					</div>
					<Button
						onClick={() => {
							setEditTask(false);
							setSelectedTask(undefined);
							setOpenAddTaskModal(true);
						}}
					>
						<div className="flex flex-row items-center gap-2">
							<AddIcon />
							<div>Create New Task</div>
						</div>
					</Button>
				</div>
				<div className="layoutBody">
					<div className="pr-5 border-r border-[#EAECF0]">
						<div className="mb-8">
							<ScrollableCalendar />
						</div>
						<div>
							<h2 className="mb-4">My Tasks</h2>
							<div className="flex flex-col items-stretch gap-4 mb-8 ">
								{currentItems.map((taskItem, ind) => (
									<TaskItem
										taskData={taskItem}
										key={ind}
										onClick={() => {
											setEditTask(true);
											setSelectedTask(taskItem);
											setOpenAddTaskModal(true);
										}}
										onSelect={(val: boolean) => {
											// if (val) {
											updateTask(taskItem.id, {
												...taskItem,
												completed: val,
											});
											// }
										}}
									/>
								))}
							</div>

							<div className="mb-24 pt-5 border-t border-[#EAECF0] ">
								<PaginationComponent
									handlePageClick={handlePageClick}
									pageCount={pageCount}
								/>
							</div>
						</div>
					</div>
					<div className="relative">
						<Modal
							open={openAddTaskModal}
							onClose={() => setOpenAddTaskModal(false)}
						>
							<AddTaskModal
								onClose={() => setOpenAddTaskModal(false)}
								edit={editTask}
								taskData={selectedTask}
							/>
						</Modal>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
