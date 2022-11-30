import { HeaderComp } from "../../components/header";
import { Typography, Box, Button, Grid } from "@mui/material";
import { InputSearch } from "../../components/inputSearch";
import { LateralMenu } from "../../components/lateralMenu";
import { useEffect, useState } from "react";
import { CardCar } from "../../components/cardCar";
import { FormCarValues } from "../../interfaces/propsInterface";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../store/modules/cars/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashBoard = () => {
	const [dataBase, setDataBase] = useState([]);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const cars = useSelector((state: any) => state.cars.payload);

	const token = localStorage.getItem("@testeToken");

	const getData = () => {
		api
			.get("/cars", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => dispatch(setCars(res.data)))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}

		getData();
	});

	const logout = () => {
		localStorage.clear();
	};

	return (
		<>
			<HeaderComp>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					width={"100%"}
					alignItems={"center"}
					margin={"0px 20px"}
				>
					<Typography variant="h6" sx={{ fontWeight: 700 }}>
						App Data Car
					</Typography>

					<InputSearch />

					<Button variant="contained" onClick={logout}>
						Logout
					</Button>
				</Box>
			</HeaderComp>
			<Box sx={{ display: "flex" }}>
				<LateralMenu />
				<Grid container>
					<Grid
						item
						sx={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							padding: "15px",
						}}
						xs={12}
					>
						{cars?.map(
							({
								brand,
								chassis,
								color,
								model,
								name,
								price,
								yearOfFabrication,
								_id,
								key,
							}: FormCarValues) => (
								<CardCar
									key={key}
									brand={brand}
									model={model}
									name={name}
									chassis={chassis}
									color={color}
									price={price}
									yearOfFabrication={yearOfFabrication}
									_id={_id}
								/>
							)
						)}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export { DashBoard };
