import { useState } from "react";
import { dayList } from "../../utils/constants";
import { Task } from "../../utils/types";
import {
	addMonths,
	getDaysInMonth,
	getLastDayOfMonth,
} from "../../utils/helpers";
import { ChevronLeft, ChevronRight } from "../svgs";

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
			<div className="lg:mb-4 mb-3 flex flex-row items-center gap-4 justify-between">
				<h2 className="text-xs lg:text-base ">
					{selectedDate.toLocaleDateString(undefined, {
						year: "numeric",
						month: "long",
					})}
				</h2>
				<div className="flex flex-row items-center gap-2">
					<ChevronLeft
						className="cursor-pointer"
						onClick={() => {
							setSelectedDate(addMonths(selectedDate, -1));
						}}
					/>
					<ChevronRight
						className="cursor-pointer"
						onClick={() => {
							setSelectedDate(addMonths(selectedDate, 1));
						}}
					/>
				</div>
			</div>
			<div className="flex flex-row items-stretch lg:gap-4 gap-3 w-full overflow-x-auto no-scrollbar ">
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
		className={`lg:min-w-[62px] lg:h-[68px] min-w-[50px] h-[54px] lg:rounded-lg rounded-[6px] lg:px-4 lg:py-[10px] px-3 py-2 flex flex-col items-center lg:gap-2 gap-[6.3px] just0fy-between lg:text-sm text-xs font-semibold cursor-pointer border ${
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
