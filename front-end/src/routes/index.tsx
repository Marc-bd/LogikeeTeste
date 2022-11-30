import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "./../pages/Signup/index";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<Home />} path="*" />

			<Route element={<Login />} path="/login" />
			<Route element={<Signup />} path="/signup" />
			<Route element={<DashBoard />} path="/dashboard" />
		</Routes>
	);
};

export default AppRoutes;
