import { useEffect, useState } from "react";
import { Task, TaskResponse } from "../utils/types";
// import { taskList as taskArr } from "../utils/constants";
import useFetch from "./useFetch";
import { addHours } from "../utils/helpers";
import { toast } from "react-toastify";

const useTasks = () => {
	const taskArr = useFetch("https://jsonplaceholder.typicode.com/todos");
	const [taskList, setTaskList] = useState<Task[]>([]);

	useEffect(() => {
		console.log(taskArr);
		setTaskList(
			taskArr.map((item: TaskResponse) => ({
				...item,
				startTime: new Date().toISOString(),
				endTime: addHours(new Date(), 1).toISOString(),
			}))
		);
	}, [taskArr]);

	const addTask = (task: Task) => {
		setTaskList([task, ...taskList]);
		toast.success("Task added successfully");
	};

	const deleteTask = (id: number) => {
		setTaskList(taskList.filter((task) => task.id !== id));
		toast.success("Task deleted successfully");
	};

	const updateTask = (id: number, updatedTask: Task) => {
		setTaskList(taskList.map((task) => (task.id === id ? updatedTask : task)));
		toast.success("Task updated successfully");
	};

	return { taskList, setTaskList, addTask, deleteTask, updateTask };
};

export default useTasks;
