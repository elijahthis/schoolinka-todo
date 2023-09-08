import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { InputAdornment, TextField } from "@mui/material";
import { ClockIcon } from "../svgs";
import { ElementType } from "react";
import dayjs from "dayjs";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface MUITimePickerProps {
	value: any;
	onChange: (newValue: any) => void;
}

const MUITimePicker = ({ value, onChange }: MUITimePickerProps) => {
	return (
		<TimePicker
			// label="Time"
			value={value}
			onChange={onChange}
			renderInput={(params) => (
				<TextField
					{...params}
					inputProps={{
						...params.inputProps,
						placeholder: "10:30 am",
						size: "1",
					}}
					sx={{
						paddingRight: 0,
						marginRight: "-10px",
						"& .MuiOutlinedInput-root": {
							flexDirection: "row-reverse",
							paddingRight: 0,
							borderRadius: "0.5rem",
						},
						"& .MuiOutlinedInput-input": {
							padding: "10px 8px",
							paddingLeft: "1.2rem",
							width: "100%",
							minWidth: "62px",
							color: "#667085",
							fontFamily: "Work Sans",
							fontSize: "14px",
							fontStyle: "normal",
							fontWeight: "600",
							lineHeight: "20px",
						},
						"& .MuiOutlinedInput-notchedOutline": {
							paddingRight: 0,
							paddingLeft: 0,
						},
						"& .MuiIconButton-root": {
							padding: 0,
							paddingLeft: "0.1rem",
						},
						"& .MuiInputAdornment-root": {},
					}}
					onKeyDown={(e) => {
						e.preventDefault();
					}}
				/>
			)}
			components={{
				OpenPickerIcon: ClockIcon as ElementType,
			}}
		/>
	);
};

export default MUITimePicker;
