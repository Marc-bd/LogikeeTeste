import { Grid } from "@mui/material";
import LoginImg from "../../assets/login.svg";

import { FormLogin } from "../../components/formLogin";

export const Login = () => {
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
					<img src={LoginImg} alt="loginImage" />
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
					<FormLogin />
				</Grid>
			</Grid>
		</>
	);
};
