import { IprospModal } from "../../interfaces/propsInterface";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import "./index.css";
import { FormCarValues } from "../../interfaces/propsInterface";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

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

export const ModalAddCar = ({ isOpen, closeModal }: IprospModal) => {
	const [openModal, setOpenModal] = useState(true);

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
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Add new Car:
				</Typography>

				<Formik
					initialValues={initialValues}
					validationSchema={object({
						brand: string()
							.required("Invalid Field")
							.min(2, "Brand minimum 2 characters"),
						model: string()
							.required("Invalid Field")
							.min(2, "Model minimum 2 characters"),
						name: string()
							.required("Invalid Field")
							.min(2, "Name minimum 2 characters"),
						yearOfFabrication: string()
							.required("Invalid Field")
							.min(4, "Year of Fabrication minimum 4 characters")
							.max(4, "Year of Fabrication minimum 4 characters"),
						price: string()
							.required("Invalid Field")
							.min(2, "Price minimum 2 characters"),
						chassis: string()
							.required("Invalid Field")
							.min(17, "Chassi minimum 17 characters")
							.max(17, "Chassi minimum 17 characters"),
						color: string()
							.required("Invalid Field")
							.min(2, "Color minimum 2 characters"),
					})}
					onSubmit={(values) => {
						console.log(values);
						console.log(`Bearer ${localStorage.getItem("@testeToken")}`);

						api
							.post("/cars", values, {
								headers: {
									Authorization: `Bearer ${localStorage.getItem(
										"@testeToken"
									)}`,
								},
							})
							.then(() => {
								toast.success("Created car");
							})
							.catch((err) => {
								toast.error("Error adding car ");
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
								error={Boolean(errors.brand) && Boolean(touched.brand)}
								helperText={Boolean(touched.brand) && errors.brand}
							/>
							<Field
								name="model"
								as={TextField}
								id="model"
								label="Model"
								variant="standard"
								error={Boolean(errors.model) && Boolean(touched.model)}
								helperText={Boolean(touched.model) && errors.model}
							/>
							<Field
								name="name"
								as={TextField}
								id="name"
								label="Name"
								variant="standard"
								error={Boolean(errors.name) && Boolean(touched.name)}
								helperText={Boolean(touched.name) && errors.name}
							/>
							<Field
								name="yearOfFabrication"
								as={TextField}
								type="number"
								id="yearOfFabrication"
								label="Year Of Fabrication"
								variant="standard"
								error={
									Boolean(errors.yearOfFabrication) &&
									Boolean(touched.yearOfFabrication)
								}
								helperText={
									Boolean(touched.yearOfFabrication) && errors.yearOfFabrication
								}
							/>
							<Field
								name="price"
								as={TextField}
								id="price"
								type="number"
								label="Price"
								variant="standard"
								error={Boolean(errors.price) && Boolean(touched.price)}
								helperText={Boolean(touched.price) && errors.price}
							/>
							<Field
								name="chassis"
								as={TextField}
								id="chassis"
								label="Chassis"
								variant="standard"
								error={Boolean(errors.chassis) && Boolean(touched.chassis)}
								helperText={Boolean(touched.chassis) && errors.chassis}
							/>
							<Field
								name="color"
								as={TextField}
								id="color"
								label="Color"
								variant="standard"
								error={Boolean(errors.color) && Boolean(touched.color)}
								helperText={Boolean(touched.color) && errors.color}
							/>

							<Button variant="contained" type="submit">
								Add Car{" "}
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Modal>
	);
};
