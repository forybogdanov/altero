import * as React from 'react';
import topNav from './topNav.svg';
import header from './header.svg';
import sideNav from './sideNav.svg'
import {Grid} from "@mui/material";
import details from"./details.svg";
import digitalTwin from "./digitalTwin.svg"
import specs from "./specs.svg"
import resultsHeader from "./resultsHeader.svg"
import result1 from "./result1.svg"
import result2 from "./result2.svg"
import result3 from "./result3.svg"
import analytics from "./analytics.svg"
import focusPoint from "./focusPoint.svg"
import focusPointInactive from "./focusPointInactive.svg"
export default function SimpleAccordion() {
    return (
        <>
           <div style={{backgroundColor:"#f7f7f7"}}>
            <Grid container spacing={3}>
                <Grid item xs={0.21}><img src={sideNav}/></Grid>
            <Grid item xs={7}>
                <img src={topNav} style={{marginRight:"50px", width: "97vw"}}></img>
                <div>
                    <img src={header} style={{width: "90vw",position:"relative",zIndex: "1", paddingLeft:"50px"}}/>
                <img src={digitalTwin} style={{position:"absolute",top: "62px",paddingLeft:"140px"}}/>
                    <img src={details} style={{position:"relative",paddingLeft:"50px"}}/>
                    <img src={focusPoint}  style={{position:"absolute",zIndex: "1",marginTop:"300px",marginLeft:"300px"}}/>
                    <img src={focusPointInactive} style={{position:"absolute",zIndex: "1",marginTop:"213px",marginLeft:"431px"}}/>
                    <img src={focusPointInactive} style={{position:"absolute",zIndex: "1",marginTop:"164px",marginLeft:"140px"}}/>
                </div>
                <img src={specs} style={{marginTop:"505px", paddingLeft:"140px"}}/>
            </Grid>
                <Grid item xs={3} style={{marginTop:"150px", marginLeft:"142px"}}>
                    <img src={resultsHeader}  style={{marginTop:"3.5vh"}}/>
                    <img src={result1} style={{marginTop:"1.7vh"}}/>
                    <img src={result2} style={{marginTop:"1.7vh"}}/>
                    <img src={result3} style={{marginTop:"1.7vh"}}/>
                    <img src={analytics}/>
                </Grid>
            </Grid>
           </div>
            </>
    );
}
