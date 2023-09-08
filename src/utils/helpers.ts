import { Dispatch, SetStateAction } from "react";

export const ellipsisTruncator = (str: string, maxLength: number): string => {
	if (str.length > maxLength) return str.slice(0, maxLength) + "...";
	else return str;
};

export const addHours = (date: Date, hours: number): Date => {
	return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

export const addMonths = (date: Date, months: number): Date => {
	return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
};

export const formatTime = (date: Date): string => {
	return date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
};

export const formatDateWithSuffix = (date: Date): string => {
	const day = date.getDate();
	const month = date.toLocaleString("en-US", { month: "long" });
	const year = date.getFullYear();

	// Add the ordinal suffix
	let suffix = "th";
	if (day === 1 || day === 21 || day === 31) {
		suffix = "st";
	} else if (day === 2 || day === 22) {
		suffix = "nd";
	} else if (day === 3 || day === 23) {
		suffix = "rd";
	}

	return `${day}${suffix} ${month}, ${year}`;
};

export const isToday = (date: Date): boolean => {
	const today = new Date();

	return (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear()
	);
};

export const getLastDayOfMonth = (date: Date): number => {
	const year = date.getFullYear();
	const month = date.getMonth();

	return new Date(year, month + 1, 0).getDate();
};

export const getDaysInMonth = (date: Date): Date[] => {
	const year = date.getFullYear();
	const month = date.getMonth();

	// Create a new Date object for the start of the month
	const firstDayOfMonth = new Date(year, month, 1);

	// Determine the last day of the month
	const lastDayOfMonth = new Date(year, month + 1, 0);

	const daysInMonth = [];
	const currentDay = new Date(firstDayOfMonth);

	while (currentDay <= lastDayOfMonth) {
		daysInMonth.push(new Date(currentDay));
		currentDay.setDate(currentDay.getDate() + 1);
	}

	return daysInMonth;
};

export const toggleSideDrawer =
	(open: any, setOpen: Dispatch<SetStateAction<any>>) => (event: any) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(open);
	};
