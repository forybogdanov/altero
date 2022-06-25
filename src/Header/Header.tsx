import { Grid, Typography } from "@mui/material";
import logo from "../logo.svg";
import { grey } from "../Theme/Theme";

export const Header = () => {
    return(
        <Grid container bgcolor={grey} marginBottom="20px" alignItems="center">
            <img src={logo} width="240px" height="52px" style={{margin: "10px"}}/>
            <Typography color="white" fontSize={32}>- Altero</Typography>
        </Grid>
    );
};