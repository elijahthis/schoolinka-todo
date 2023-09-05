import { createContext } from "react";
import { Task } from "../utils/types";

export const taskContext = createContext<{
	taskList: Task[];
	setTaskList: (arr: Task[]) => void;
	addTask: (task: Task) => void;
	deleteTask: (id: number) => void;
	updateTask: (id: number, updatedTask: Task) => void;
}>({
	taskList: [],
	setTaskList: (arr: Task[]) => {},
	addTask: (task: Task) => {},
	deleteTask: (id: number) => {},
	updateTask: (id: number) => {},
});
