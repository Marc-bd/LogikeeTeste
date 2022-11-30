import { Grid, Button, Typography, Box, Container } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import JavaScript from "../../assets/js-image.svg";
import React from "../../assets/react-logo.svg";
import Mongo from "../../assets/mongodb.svg";
import Material from "../../assets/material.svg";
import { HeaderComp } from "../../components/header";
import HomeImg from "../../assets/home.svg";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	const NavigateToLogin = () => {
		return navigate("/login");
	};

	const NavigateToSignUp = () => {
		return navigate("/login");
	};

	return (
		<>
			<HeaderComp>
				<Container>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 700,
							color: "#ffffff",

							textAlign: "start",
						}}
					>
						App Data Car
					</Typography>
				</Container>
				<Grid>
					<Button
						color="primary"
						variant="outlined"
						sx={{ backgroundColor: "#fff" }}
						onClick={NavigateToLogin}
					>
						Login
					</Button>
				</Grid>
			</HeaderComp>
			<Grid
				container
				spacing={3}
				direction="column"
				width="100vw"
				minWidth="100vw"
				height="80vh"
				margin="0"
				padding="0"
				sx={{
					flexGrow: 1,
				}}
			>
				<Grid item spacing={3} rowSpacing={2}>
					<Grid
						item
						height="50vh"
						display={"flex"}
						flexDirection={"row-reverse"}
						alignItems={"center"}
					>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-evenly"
							alignItems={"center"}
							padding={"16px"}
						>
							<Typography
								sx={{ color: "#000", textAlign: "center" }}
								variant="h5"
							>
								Welcome to AppCar Data
							</Typography>
							<Grid width="50vw">
								<Typography
									variant="subtitle1"
									sx={{ color: "#000", textAlign: "center" }}
								>
									With AppCar Data you will have a database where you can store
									all the car information for your company!
								</Typography>
							</Grid>
							<Typography variant="body1" sx={{ color: "#000" }}>
								Whenever you need it, you can consult the registered data very
								easily.
							</Typography>
						</Box>
						<Box>
							<img src={HomeImg} alt="homeimage" width={"550px"} />
						</Box>
					</Grid>

					<Grid item>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Button
								variant="outlined"
								sx={{ gap: "5px", backgroundColor: "#fff" }}
								onClick={NavigateToSignUp}
							>
								Join Us
								<EmojiEmotionsOutlinedIcon />
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
					}}
				>
					<img src={JavaScript} alt="reactIcon" />
					<img src={React} alt="reactIcon" />
					<img src={Mongo} alt="reactIcon" width="100px" />
					<img src={Material} alt="reactIcon" />
				</Box>
			</Grid>
		</>
	);
};
