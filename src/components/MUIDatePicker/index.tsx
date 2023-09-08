import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { CalenderIcon } from "../svgs";
import { ElementType } from "react";
import { isToday } from "../../utils/helpers";

interface MUIDatePickerProps {
	value: any;
	onChange: (newValue: any) => void;
}

const MUIDatePicker = ({ value, onChange }: MUIDatePickerProps) => {
	return (
		<DatePicker
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
						"& .MuiOutlinedInput-root": {
							flexDirection: "row-reverse",
							// paddingRight: 0,
							borderRadius: "0.5rem",
						},
						"& .MuiOutlinedInput-input": {
							padding: "10px 8px",
							paddingLeft: "1.2rem",
							width: "100%",
							minWidth: "42px",
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
						"& .MuiSvgIcon-root": {
							width: "20px",
							height: "20px",
						},
					}}
					onKeyDown={(e) => {
						e.preventDefault();
					}}
				/>
			)}
		/>
	);
};

export default MUIDatePicker;
