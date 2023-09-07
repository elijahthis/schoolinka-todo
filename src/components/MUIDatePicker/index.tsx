import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

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
				/>
			)}
		/>
	);
};

export default MUIDatePicker;
