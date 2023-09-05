import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { taskContext } from "./contexts/taskContext";
import { Task } from "./utils/types";
import { taskList as taskArr } from "./utils/constants";

function App() {
	const [taskList, setTaskList] = useState<Task[]>(taskArr);

	const addTask = (task: Task) => {
		setTaskList([...taskList, task]);
	};

	const deleteTask = (id: number) => {
		setTaskList(taskList.filter((task) => task.id !== id));
	};

	const updateTask = (id: number, updatedTask: Task) => {
		setTaskList(taskList.map((task) => (task.id === id ? updatedTask : task)));
	};

	return (
		<div className="App">
			<taskContext.Provider
				value={{ taskList, setTaskList, addTask, deleteTask, updateTask }}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</taskContext.Provider>
		</div>
	);
}

export default App;
