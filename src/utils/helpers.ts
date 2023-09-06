export const ellipsisTruncator = (str: string, maxLength: number) => {
	if (str.length > maxLength) return str.slice(0, maxLength) + "...";
	else return str;
};

export const addHours = (date: Date, hours: number) => {
	return new Date(date.getTime() + hours * 60 * 60 * 1000);
};

export const formatTime = (date: Date) => {
	return date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true, 
	});
};
