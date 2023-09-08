import { addHours } from "./helpers";
import { Task } from "./types";

export const taskList: Task[] = [
	{
		id: 1,
		userId: 2,
		title: "Create Wireframe",
		startTime: new Date().toISOString(),
		endTime: addHours(new Date(), 1).toISOString(),
		completed: false,
	},
	{
		id: 2,
		userId: 2,
		title: "Design Landing Page",
		startTime: new Date().toISOString(),
		endTime: addHours(new Date(), 1).toISOString(),
		completed: false,
	},
	// {
	// 	id: 3,
	// 	userId: 2,
	// 	title: "Go shopping",
	// 	startTime: new Date().toISOString(),
	// 	endTime: addHours(new Date(), 1).toISOString(),
	// 	completed: false,
	// },
	// {
	// 	id: 4,
	// 	userId: 2,
	// 	title: "Do my laundry",
	// 	startTime: new Date().toISOString(),
	// 	endTime: addHours(new Date(), 1).toISOString(),
	// 	completed: false,
	// },
	// {
	// 	id: 5,
	// 	userId: 2,
	// 	title: "Meeting with Product Manager",
	// 	startTime: new Date().toISOString(),
	// 	endTime: addHours(new Date(), 1).toISOString(),
	// 	completed: false,
	// },
	// {
	// 	id: 6,
	// 	userId: 2,
	// 	title: "Meeting with stakeholder",
	// 	startTime: new Date().toISOString(),
	// 	completed: false,
	// },
];

export const monthList: string[] = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
