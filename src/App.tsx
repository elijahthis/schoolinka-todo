import React from "react";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { taskContext } from "./contexts/taskContext";
import useTasks from "./hooks/useTasks";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
				<ToastContainer
					position="bottom-center"
					// autoClose={false}
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover={true}
					transition={Zoom}
				/>
			</taskContext.Provider>
		</div>
	);
}

export default App;
