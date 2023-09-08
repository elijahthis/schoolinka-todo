import { useContext, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import PaginationComponent from "../components/PaginationComponent";
import ScrollableCalendar from "../components/ScrollableCalendar";
import TaskItem from "../components/TaskItem";
import {
	AddTaskModal,
	DeleteTaskModal,
	ViewTaskModal,
} from "../components/modals";
import { AddIcon, MicrophoneIcon } from "../components/svgs";
import { Task } from "../utils/types";
import { taskContext } from "../contexts/taskContext";
import usePaginate from "../hooks/usePaginate";
import useFilter from "../hooks/useFilter";
import EmptyState from "../components/EmptyState";
import { SwipeableDrawer } from "@mui/material";
import { toggleSideDrawer } from "../utils/helpers";

const Home = () => {
	const [editTask, setEditTask] = useState(false);
	const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

	const [whichModal, setWhichModal] = useState<
		"add_edit" | "view" | "delete" | null
	>(null);

	const { taskList, setTaskList, addTask, deleteTask, updateTask } =
		useContext(taskContext);

	const { filterDate, filteredTasks, handleFilterDate } = useFilter(taskList);

	const itemsPerPage = 7;
	const { currentItems, pageCount, handlePageClick } = usePaginate(
		itemsPerPage,
		filteredTasks
	);

	const renderModal = (): JSX.Element => {
		switch (whichModal) {
			case "view":
				return (
					<ViewTaskModal
						taskData={selectedTask}
						openDeleteModal={() => setWhichModal("delete")}
						openEditModal={() => setWhichModal("add_edit")}
						onClose={() => setWhichModal(null)}
					/>
				);
			case "add_edit":
				return (
					<AddTaskModal
						edit={editTask}
						taskData={selectedTask}
						// onCancel={() => setWhichModal("view")}
						onClose={() => setWhichModal(null)}
					/>
				);
				break;
			case "delete":
				return (
					<DeleteTaskModal
						taskData={selectedTask}
						onClose={() => setWhichModal(null)}
						cancelFunc={() => setWhichModal("view")}
						deleteFunc={() => {
							deleteTask(selectedTask?.id || 0);
							setWhichModal(null);
						}}
					/>
				);

			default:
				return <></>;
				break;
		}
	};

	return (
		<>
			<div>
				<div className="flex flex-row items-start gap-4 justify-between lg:pt-12 pt-8 mb-8 ">
					<div className="flex flex-col items-start gap-1 ">
						<h1>Good morning!</h1>
						<p className="text-[#475467]">You've got some tasks to do.</p>
					</div>
					<Button
						onClick={() => {
							setEditTask(false);
							setSelectedTask(undefined);

							setWhichModal("add_edit");
						}}
						className="lg:inline-block hidden"
					>
						<div className="flex flex-row items-center gap-2">
							<AddIcon />
							<div>Create New Task</div>
						</div>
					</Button>
				</div>
				<div className="layoutBody">
					<div className="lg:pr-5 lg:border-r lg:border-[#EAECF0]">
						<div className="mb-8">
							<ScrollableCalendar
								filterDate={filterDate}
								filteredTasks={filteredTasks}
								handleFilterDate={handleFilterDate}
							/>
						</div>
						<div>
							<h2 className="mb-4">My Tasks</h2>
							<div className="flex flex-col items-stretch gap-4 mb-8 ">
								{currentItems.length === 0 ? (
									<EmptyState message="Oops! You have no tasks on the selected date" />
								) : (
									currentItems.map((taskItem, ind) => (
										<TaskItem
											taskData={taskItem}
											key={ind}
											onClick={() => {
												setEditTask(true);
												setSelectedTask(taskItem);

												setWhichModal("view");
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
									))
								)}
							</div>

							<div className="lg:mb-24 mb-28 pt-5 border-t border-[#EAECF0] ">
								<PaginationComponent
									handlePageClick={handlePageClick}
									pageCount={pageCount}
								/>
							</div>
						</div>
					</div>
					<div className="relative hidden lg:block ">
						<Modal open={whichModal !== null}>{renderModal()}</Modal>
					</div>
				</div>
			</div>
			<div className="block lg:hidden fixed bottom-0 left-0 w-full py-5 px-4 pb-8 bg-white">
				<div
					className="cursor-pointer border border-[#D0D5DD] bg-[#F9FAFB] rounded-lg flex flex-row items-center gap-3 justify-between py-2 px-3 text-base text-[#475467] "
					onClick={() => {
						setEditTask(false);
						setSelectedTask(undefined);

						setWhichModal("add_edit");
					}}
				>
					<p>Input task</p>
					<MicrophoneIcon />
				</div>
			</div>
			{document.body.clientWidth <= 1024 && (
				<SwipeableDrawer
					anchor="bottom"
					open={whichModal !== null}
					onClose={toggleSideDrawer(null, setWhichModal)}
					onOpen={toggleSideDrawer("add_edit", setWhichModal)}
					sx={{
						"& .MuiPaper-root": {
							borderRadius: "28px 28px 0 0",
						},
					}}
				>
					{renderModal()}
				</SwipeableDrawer>
			)}
		</>
	);
};

export default Home;
