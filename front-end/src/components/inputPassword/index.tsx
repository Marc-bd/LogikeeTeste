import {
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

interface State {
	amount: string;
	password: string;
	weight: string;
	weightRange: string;
	showPassword: boolean;
}

export const InputPassword = () => {
	const [values, setValues] = useState<State>({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};
	return (
		<FormControl sx={{ m: 1, width: "100%" }} variant="standard">
			<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
			<Input
				id="standard-adornment-password"
				type={values.showPassword ? "text" : "password"}
				value={values.password}
				onChange={handleChange("password")}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};
