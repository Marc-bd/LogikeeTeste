import { IprospModal } from "../../interfaces/propsInterface";
import { Modal, Box, Typography } from "@mui/material";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 400,
	bgcolor: "background.paper",
	border: "2px solid #949494",
	boxShadow: 24,
	p: 4,
};

export const ModalList = ({ isOpen, closeModal, title }: IprospModal) => {
	return (
		<Modal
			open={isOpen}
			onClose={closeModal}
			aria-labelledby={"modal-modal-title"}
			aria-describedby={"modal-modal-description"}
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{title}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	);
};
