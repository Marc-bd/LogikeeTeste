import {
	Card,
	CardContent,
	Box,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import { FormCarValues } from "../../interfaces/propsInterface";
import { useState } from "react";
import api from "../../services/api";
import { ModalUpdateCar } from "../modalUpdateCar";

export const CardCar = ({
	brand,
	chassis,
	color,
	model,
	name,
	price,
	yearOfFabrication,
	_id,
	key,
}: FormCarValues) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const deleteCar = (id: string | undefined) => {
		const token = localStorage.getItem("@testeToken");
		api
			.delete(`/cars/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Card
			sx={{
				width: "350px",
				height: "360px",
				margin: "15px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CardContent key={key}>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Brand:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{brand}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Model:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{model}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Name:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{name}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Year of Fabrication:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{yearOfFabrication}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Price:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{price}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Color:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{color}
					</Typography>
				</Box>
				<Box display="flex" alignItems={"center"} gap={"10px"}>
					<Typography variant="h6" sx={{ fontWeight: "700" }}>
						Chassis:
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "20px" }}>
						{chassis}
					</Typography>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<Button
					size="small"
					variant="contained"
					color="warning"
					onClick={handleOpen}
				>
					Update
				</Button>
				<Button
					size="small"
					variant="contained"
					color="error"
					id={_id}
					onClick={() => deleteCar(_id)}
				>
					Delete
				</Button>
			</CardActions>
			<ModalUpdateCar
				isOpen={open}
				closeModal={handleClose}
				chassis={chassis}
				brand={brand}
				_id={_id}
			/>
		</Card>
	);
};
