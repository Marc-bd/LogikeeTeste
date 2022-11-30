import * as React from "react";
import { Container, Grid, Box, Link } from "@mui/material";

export const FooterComp = () => {
	return (
		<>
			<Box margin="auto" sx={{ position: "fixed", bottom: 0, left: 0 }}>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={2}>Help</Box>
							<Box>
								<Link href="/" color="inherit">
									Contact
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									Support
								</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box borderBottom={2}>Account</Box>
							<Box>
								<Link href="/" color="inherit">
									Register
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									Login
								</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box borderBottom={2}>Tecnologies</Box>
							<Box>
								<Link href="/" color="inherit">
									React
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit">
									MaterialUI
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};
