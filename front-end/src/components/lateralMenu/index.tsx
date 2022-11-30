import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
	Divider,
	Modal,
} from "@mui/material";

import { useState } from "react";
import { MenuCar } from "../menuCars";
import { MenuCategory } from "../menucategory";

export const LateralMenu = () => {
	return (
		<>
			<Box height={"100vh"} width={"250px"} bgcolor="#fff">
				<MenuCar />
				<MenuCategory />
			</Box>
		</>
	);
};
