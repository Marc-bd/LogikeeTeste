import {
	List,
	Typography,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Divider,
} from "@mui/material";
import { useState } from "react";

import { ModalCategory } from "../modalCategory";

export const MenuCategory = () => {
	const categoryList = [
		"Brand",
		"Model",
		"Name",
		"Year Of Fabrication",
		"Price",
		"Chassis",
		"Color",
	];

	const [open, setOpen] = useState(false);
	const [target, setTarget] = useState("");

	const handleClose = () => setOpen(false);

	const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.currentTarget.id;
		console.log(target);
		setTarget(target);
		setOpen(true);
	};

	return (
		<>
			<List sx={{ paddingTop: "0" }}>
				<Typography
					variant="h6"
					sx={{ textAlign: "center", backgroundColor: "#6ea7fd" }}
				>
					{" "}
					Category
				</Typography>

				{categoryList.map((name, index) => (
					<ListItem>
						<ListItemButton
							key={index}
							id={name}
							onClick={(e) => handleOpen(e)}
						>
							<ListItemIcon>{name}</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
				<Divider />
			</List>
			<ModalCategory isOpen={open} closeModal={handleClose} title={target} />
		</>
	);
};
