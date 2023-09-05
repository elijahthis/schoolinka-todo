import React from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { taskContext } from "./contexts/taskContext";
import useTasks from "./hooks/useTasks";

function App() {
	const { taskList, setTaskList, addTask, deleteTask, updateTask } = useTasks();

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
