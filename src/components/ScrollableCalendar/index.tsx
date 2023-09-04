const ScrollableCalendar = () => {
	const dayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div>
			<h2 className="mb-4">January 2023</h2>
			<div className="flex flex-row items-stretch gap-4 w-full overflow-x-auto ">
				{Array(31)
					.fill(0)
					.map((item, ind) => (
						<CalendarDay
							weekday={dayList[ind % 7]}
							day={ind + 1}
							key={ind + 1}
							isSelected={ind === 1}
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
}

const CalendarDay = ({
	weekday,
	day,
	isSelected = false,
}: CalendarDayProps) => (
	<div
		className={`min-w-[62px] h-[68px] rounded-lg px-4 py-[10px] flex flex-col items-center gap-2 just0fy-between text-sm font-semibold cursor-pointer border ${
			isSelected
				? "text-white border-pry-col bg-pry-col"
				: "text-[#344054] border-[#D0D5DD] bg-white"
		} `}
	>
		<p>{weekday}</p>
		<p>{day}</p>
	</div>
);

export default ScrollableCalendar;
