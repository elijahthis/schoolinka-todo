import { useState } from "react";
import { dayList } from "../../utils/constants";
import { Task } from "../../utils/types";
import { getDaysInMonth, getLastDayOfMonth } from "../../utils/helpers";

interface ScrollableCalendarProps {
	filterDate: Date | null;
	filteredTasks: Task[];
	handleFilterDate: (date: Date | null) => void;
}

const ScrollableCalendar = ({
	filterDate,
	filteredTasks,
	handleFilterDate,
}: ScrollableCalendarProps) => {
	const [selectedDate, setSelectedDate] = useState<Date>(
		filterDate ?? new Date()
	);

	return (
		<div>
			<h2 className="mb-4">
				{selectedDate.toLocaleDateString(undefined, {
					year: "numeric",
					month: "long",
				})}
			</h2>
			<div className="flex flex-row items-stretch gap-4 w-full overflow-x-auto no-scrollbar ">
				{getDaysInMonth(selectedDate).map((item, ind) => (
					<CalendarDay
						weekday={dayList[item.getDay()].slice(0, 3)}
						day={item.getDate()}
						key={ind + 1}
						isSelected={filterDate ? ind + 1 === filterDate.getDate() : false}
						onSelect={() => {
							setSelectedDate(item);
							handleFilterDate(item);
						}}
						deSelect={() => {
							setSelectedDate(new Date());
							handleFilterDate(null);
						}}
					/>
				))}
			</div>
		</div>
	);
};

interface CalendarDayProps {
	weekday: string;
	day: number;
	isSelected?: boolean;
	onSelect: () => void;
	deSelect: () => void;
}

const CalendarDay = ({
	weekday,
	day,
	isSelected = false,
	onSelect,
	deSelect,
}: CalendarDayProps) => (
	<div
		className={`min-w-[62px] h-[68px] rounded-lg px-4 py-[10px] flex flex-col items-center gap-2 just0fy-between text-sm font-semibold cursor-pointer border ${
			isSelected
				? "text-white border-pry-col bg-pry-col"
				: "text-[#344054] border-[#D0D5DD] bg-white"
		} `}
		onClick={() => {
			if (isSelected) deSelect();
			else onSelect();
		}}
	>
		<p>{weekday}</p>
		<p>{day}</p>
	</div>
);

export default ScrollableCalendar;
