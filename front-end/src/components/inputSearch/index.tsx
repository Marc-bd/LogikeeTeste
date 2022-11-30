import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

const InputSearch = () => {
	return (
		<Paper
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Car"
				inputProps={{ "aria-label": "search cars" }}
			/>
			<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export { InputSearch };
