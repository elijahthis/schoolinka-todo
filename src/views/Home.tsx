import Button from "../components/Button";
import ScrollableCalendar from "../components/ScrollableCalendar";
import TaskItem from "../components/TaskItem";
import { AddIcon } from "../components/svgs";
import { taskList } from "../utils/constants";

const Home = () => {
	return (
		<div>
			<div className="flex flex-row items-start gap-4 justify-between pt-12 mb-8 ">
				<div className="flex flex-col items-start gap-1 ">
					<h1>Good morning!</h1>
					<p>You got some task to do.</p>
				</div>
				<Button>
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
							/>
						))}
					</div>

					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
