import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
	Divider,
} from "@mui/material";
import { useState } from "react";
import { ModalAddCar } from "./../modalAddCar/index";

export const MenuCar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<List sx={{ paddingTop: "0" }}>
			<Typography
				variant="h6"
				sx={{ textAlign: "center", backgroundColor: "#6ea7fd" }}
			>
				{" "}
				Cars
			</Typography>

			<ListItem>
				<ListItemButton>
					<ListItemIcon>All Cars</ListItemIcon>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton onClick={handleOpen}>
					<ListItemIcon>Add New Car</ListItemIcon>
				</ListItemButton>
			</ListItem>
			<Divider />
			<ModalAddCar isOpen={open} closeModal={handleClose} />
		</List>
	);
};
