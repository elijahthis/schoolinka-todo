export const ellipsisTruncator = (str: string, maxLength: number): string => {
	if (str.length > maxLength) return str.slice(0, maxLength) + "...";
	else return str;
};

export const addHours = (date: Date, hours: number): Date => {
	return new Date(date.getTime() + hours * 60 * 60 * 1000);
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
