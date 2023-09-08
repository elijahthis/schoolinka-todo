import { render, screen } from "@testing-library/react";
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
});
