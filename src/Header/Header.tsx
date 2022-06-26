import { Grid, Typography } from "@mui/material";
import logo from "../logo.svg";
import altero from "../altero-logo.svg";
import { grey } from "../Theme/Theme";

export const Header = () => {
    return(
        <Grid container bgcolor={grey} marginBottom="20px" alignItems="center">
            <img src={altero} width="150px" height="44px" style={{margin: "10px"}}/>
            <Typography marginTop={"20px"} marginLeft={"10px"} marginRight={"10px"} color="white" fontSize={18}>by</Typography>
            <img src={logo} width="168px" height="36px" style={{margin: "10px"}}/>
        </Grid>
    );
};