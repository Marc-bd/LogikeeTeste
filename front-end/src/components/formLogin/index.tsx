import { Grid, TextField, Typography, Button, Link, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { useState } from "react";

interface MyFormValues {
	email: string;
	password: string;
}

const FormLogin = () => {
	const navigate = useNavigate();

	const initialValues: MyFormValues = { email: "", password: "" };

	return (
		<Grid
			container
			spacing={2}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Grid item>
				<Typography variant="h5">Login</Typography>
			</Grid>

			<Grid item display="flex" flexDirection="column" alignItems={"center"}>
				<Formik
					initialValues={initialValues}
					validationSchema={object({
						email: string()
							.required("Please enter email")
							.email("Invalid email"),
						password: string()
							.required("Please enter password")
							.min(6, "Password should be minimum 6 characters long"),
					})}
					onSubmit={(values) => {
						api
							.post("/login", values)
							.then((res) => {
								console.log(res);
								window.localStorage.setItem("@testeToken", res.data.token);
								toast.success("Welcome to Dashboard");
								navigate("/dashboard");
							})
							.catch((error) => toast.error("Invalid Email or Password"));
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<Field
								name="email"
								as={TextField}
								id="email"
								label="Email"
								variant="standard"
								required={true}
								sx={{ width: "100%" }}
								error={Boolean(errors.email) && Boolean(touched.email)}
								helperText={Boolean(touched.email) && errors.email}
							/>
							<Box height={22} />

							<Field
								name="password"
								as={TextField}
								id="password"
								label="password"
								variant="standard"
								required={true}
								type="password"
								sx={{ width: "100%" }}
								error={Boolean(errors.password) && Boolean(touched.password)}
								helperText={Boolean(touched.password) && errors.password}
							/>

							<Button id="button " variant="contained" type="submit">
								{" "}
								Login{" "}
							</Button>
						</Form>
					)}
				</Formik>
			</Grid>
			<Grid item>
				<Link href="/signup">Don't have a registration? register for free</Link>
			</Grid>
			<Grid item>
				<Link href="/">Home Page</Link>
			</Grid>
		</Grid>
	);
};

export { FormLogin };
