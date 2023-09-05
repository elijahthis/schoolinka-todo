export const ellipsisTruncator = (str: string, maxLength: number) => {
	if (str.length > maxLength) return str.slice(0, maxLength) + "...";
	else return str;
};

export const addHours = (date: Date, hours: number) => {
	return new Date(date.getTime() + hours * 60 * 60 * 1000);
};
