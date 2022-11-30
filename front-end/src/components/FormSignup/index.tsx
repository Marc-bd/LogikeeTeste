import "./index.css";
import { Grid, TextField, Typography, Button, Link, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { FormCreateUser } from "../../interfaces/propsInterface";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
	const navigate = useNavigate();

	const initialValues: FormCreateUser = {
		username: "",
		email: "",
		password: "",
	};

	return (
		<Grid
			container
			spacing={2}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Grid item>
				<Typography variant="h5">Sign Up</Typography>
			</Grid>
			<Grid item display="flex" flexDirection="column" alignItems={"center"}>
				<Formik
					initialValues={initialValues}
					validationSchema={object({
						username: string()
							.required("Please enter username")
							.min(4, "Usernameshould be minimum 4 characters long"),
						email: string()
							.required("Please enter email")
							.email("Invalid email"),
						password: string()
							.required("Please enter password")
							.min(6, "Password should be minimum 6 characters long"),
					})}
					onSubmit={(values: FormCreateUser) => {
						api
							.post("/users", values)
							.then((res) => {
								toast.success(`Thank you, now you are registered !!`);
								navigate("/login");
							})
							.catch((err) => {
								toast.error(`Ops, something wrong :(`);
							});
					}}
				>
					{({ errors, touched }) => (
						<Form className="form">
							<Field
								className="inputField"
								name="username"
								as={TextField}
								id="username"
								label="Username"
								variant="standard"
								required={true}
								sx={{ width: "100%" }}
								error={Boolean(errors.username) && Boolean(touched.username)}
								helperText={Boolean(touched.username) && errors.username}
							/>
							<Field
								className="inputField"
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
								className="inputField"
								name="password"
								as={TextField}
								id="password"
								label="password"
								variant="standard"
								required={true}
								type="password"
								error={Boolean(errors.password) && Boolean(touched.password)}
								helperText={Boolean(touched.password) && errors.password}
							/>

							<Button
								className="buttonSubmit"
								type="submit"
								variant="contained"
							>
								{" "}
								Login{" "}
							</Button>
						</Form>
					)}
				</Formik>
			</Grid>

			<Grid item>
				<Link href="/login">Already have registration? Login</Link>
			</Grid>
			<Grid item>
				<Link href="/">Home Page</Link>
			</Grid>
		</Grid>
	);
};

export { FormRegister };
