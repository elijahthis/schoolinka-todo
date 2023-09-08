import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { taskList } from "../../utils/constants";
import TaskItem from "../TaskItem";
import { ellipsisTruncator, formatTime, isToday } from "../../utils/helpers";

describe("TodoList component", () => {
	it("renders the right data from a given Task", () => {
		const { getByText } = render(
			<>
				{taskList.map((taskItem, ind) => (
					<TaskItem
						taskData={taskItem}
						key={ind}
						onClick={jest.fn()}
						onSelect={jest.fn()}
					/>
				))}
			</>
		);

		taskList.forEach((task) => {
			const taskTitle = getByText(ellipsisTruncator(task.title, 28));

			expect(taskTitle).toBeInTheDocument();
		});
	});

	it("allows completing tasks. Checks if checkbox gets checked on click", () => {
		let currTask = { ...taskList[0] };

		const { getByText, getByLabelText, rerender } = render(
			<TaskItem
				taskData={currTask}
				onClick={jest.fn()}
				onSelect={(val: boolean) => {
					console.log(val);
					currTask.completed = val;
					console.log(currTask);
				}}
			/>
		);

		const taskCheckbox = getByLabelText("Complete Task");

		fireEvent.click(taskCheckbox);

		rerender(
			<TaskItem
				taskData={currTask}
				onClick={jest.fn()}
				onSelect={(val: boolean) => {
					console.log(val);
					currTask.completed = val;
					console.log(currTask);
				}}
			/>
		);

		expect(taskCheckbox).toBeChecked();
	});
});
