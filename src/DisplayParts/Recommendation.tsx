import comphead from './comphead.svg'
import detailedResult from './detailedResult.svg'
import {Grid} from "@mui/material";
import sideNav from './sideNav.svg'
import topNav from "./topNav.svg";
import detailedResult3 from './detailedResult3.svg'
import detailedResult2 from './detailedResult2.svg'
import * as React from "react";

export default function Recommendation() {
    return (
        <>
            <div style={{backgroundColor:"#f7f7f7" ,fontFamily:"Montserrat"}}>
                <Grid container spacing={3}>
                    <Grid item xs={0.21}><img src={sideNav}/></Grid>
                    <Grid item xs={7}>
                        <img src={topNav} style={{marginRight:"50px", width: "97vw"}}></img>
                        <div>
                            <img src={comphead} style={{width: "65vw",position:"relative",zIndex: "1", paddingLeft:"50px"}}/>
                            <div style={{display:"flex", marginLeft:"174px", gap:"169px", marginTop:"50px"}}>
                                <img src={detailedResult}/>
                                <img src={detailedResult2}/>
                                <img src={detailedResult3}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
