import { useEffect, useState } from "react";
import { Task } from "../utils/types";

const useFilter = (taskArr: Task[]) => {
	const [filterDate, setFilterDate] = useState<Date | null>(null);
	const [filteredTasks, setFilteredTasks] = useState<Task[]>(taskArr);

	const handleFilterDate = (date: Date | null) => {
		setFilterDate(date);
	};

	useEffect(() => {
		if (filterDate) {
			setFilteredTasks(
				taskArr.filter((task) => {
					const taskDate = new Date(task.startTime);
					return taskDate.toDateString() === filterDate.toDateString();
				})
			);
		} else {
			setFilteredTasks(taskArr);
		}
	}, [filterDate, taskArr]);

	return { filterDate, filteredTasks, handleFilterDate };
};

export default useFilter;
