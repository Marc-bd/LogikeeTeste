import { Grid } from "@mui/material";
import SignupImage from "../../assets/register.svg";
import { FormRegister } from "../../components/FormSignup";
import "./index.css";

export const Signup = () => {
	return (
		<>
			<Grid
				container
				minHeight={"100vh"}
				minWidth={"100vw"}
				width={"100vw"}
				height={"100vh"}
				alignItems={"center"}
			>
				<Grid
					item
					width={"50%"}
					height={"100%"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
				>
					<img src={SignupImage} alt="signupImage" />
				</Grid>
				<Grid
					item
					width={"50%"}
					height="100%"
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					bgcolor={"#ffff"}
					alignItems="center"
				>
					<FormRegister />
				</Grid>
			</Grid>
		</>
	);
};
