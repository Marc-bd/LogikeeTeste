import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { IPropsChildren } from "../../interfaces/propsInterface";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "../../assets/react-logo.svg";

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function ElevationScroll(props: Props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const HeaderComp: React.FC<IPropsChildren> = ({ children }) => {
	return (
		<CssBaseline>
			<ElevationScroll>
				<AppBar position="static">
					<Toolbar>{children}</Toolbar>
				</AppBar>
			</ElevationScroll>
		</CssBaseline>
	);
};

export { HeaderComp };
