import { FormCarValues, IprospModal } from "../../interfaces/propsInterface";

import {
	Modal,
	Box,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	Button,
} from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 200,
	bgcolor: "background.paper",
	border: "2px solid #949494",
	boxShadow: 24,
	p: 4,
	display: "flex",
	flexDirection: "column",
};

export const ModalCategory = ({ isOpen, closeModal, title }: IprospModal) => {
	const [category, setCategory] = useState("");
	const cars = useSelector((state: any) => state.cars.payload);
	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
	};

	return (
		<Modal
			open={isOpen}
			onClose={closeModal}
			aria-labelledby={"modal-modal-title"}
			aria-describedby={"modal-modal-description"}
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Search Car By {title}:
				</Typography>

				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">{title}</InputLabel>

					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={category}
						label="category"
						onChange={handleChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>

				<Button
					variant="contained"
					sx={{ width: "100px", alignSelf: "center", margin: "16px" }}
					onClick={() => console.log("teste")}
				>
					Search{" "}
				</Button>
			</Box>
		</Modal>
	);
};
