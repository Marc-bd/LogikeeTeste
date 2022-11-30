import { IprospModal } from "../../interfaces/propsInterface";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import "./index.css";
import { FormCarValues } from "../../interfaces/propsInterface";
import { Formik, Form, Field } from "formik";
import { cleanData } from "./../../utils/cleanEmptyKeys";
import api from "../../services/api";
import { toast } from "react-toastify";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 600,
	bgcolor: "background.paper",
	border: "2px solid #949494",
	boxShadow: 24,
	p: 4,
	display: "flex",
	flexDirection: "column",
};

export const ModalUpdateCar = ({
	isOpen,
	closeModal,
	chassis,
	brand,
	_id,
}: IprospModal) => {
	const initialValues: FormCarValues = {
		brand: "",
		model: "",
		name: "",
		yearOfFabrication: "",
		price: " ",
		chassis: "",
		color: "",
	};

	return (
		<Modal
			open={isOpen}
			onClose={closeModal}
			aria-labelledby={"modal-modal-title"}
			aria-describedby={"modal-modal-description"}
		>
			<Box sx={style}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography
						id="modal-modal-title"
						variant="h5"
						sx={{ fontWeight: "700" }}
					>
						Update Car with chassi:
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="h6"
						sx={{ fontWeight: "700" }}
					>
						{chassis}
					</Typography>
				</Box>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => {
						const newData = cleanData(values);
						console.log(newData);
						const token = localStorage.getItem("@testeToken");
						api
							.patch(`/cars/${_id}`, newData, {
								headers: {
									Authorization: `Bearer ${token}`,
								},
							})
							.then(() => {
								toast.success("Updated car");
							})
							.catch((err) => {
								toast.error("Error update car ");
							});
					}}
				>
					{({ errors, touched }) => (
						<Form className="formAdd">
							<Field
								name="brand"
								as={TextField}
								id="brand"
								label="Brand"
								variant="standard"
							/>
							<Field
								name="model"
								as={TextField}
								id="model"
								label="Model"
								variant="standard"
							/>
							<Field
								name="name"
								as={TextField}
								id="name"
								label="Name"
								variant="standard"
							/>
							<Field
								name="yearOfFabrication"
								as={TextField}
								id="yearOfFabrication"
								label="Year Of Fabrication"
								variant="standard"
							/>
							<Field
								name="price"
								as={TextField}
								id="price"
								label="Price"
								variant="standard"
							/>
							<Field
								name="chassi"
								as={TextField}
								id="chassi"
								label="Chassi"
								variant="standard"
							/>
							<Field
								name="color"
								as={TextField}
								id="color"
								label="Color"
								variant="standard"
							/>

							<Button variant="contained" type="submit">
								Update Car{" "}
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Modal>
	);
};
