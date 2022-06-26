import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, Grid, Input, InputLabel, Typography } from "@mui/material";
import { Brakes, Engine, Gearbox, Tires } from "../Interfaces/Interfaces";
import { specificationsFormClasses as classes, StyledSpecificationsForm } from "./StyledSpecificationsForm";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { Header } from "../Header/Header";
import SimpleAccordion from "../DisplayParts/SimpleAccordion";
import {Route} from "react-router-dom";
import { useNavigate } from "react-router-dom"

const brakesInput: Brakes = {
    image: "",
    name: "brembo",
    dateOfProduction: "22.06.2022",
    specification: {
        padWear: "12",
        control: "20",
        meanFriction: "100",
        heatConduct: "34",
    },
};
const tiresInput: Tires = {
    image: "",
    name: "Pirelli",
    dateOfProduction: "19.07.2021",
    specification: {
        rimDiameter: "16inch",
        speedRating: "S",
    },
};
const engineInput: Engine = {
    image: "",
    name: "BMW",
    dateOfProduction: "19.07.2021",
    specification: {
        power: "250 horse power",
        fuelConsumption: "9L/100km",
        acceleration: "0-100km for 5s",
    },
};
const gearBoxInput: Gearbox = {
    image: "",
    name: "",
    dateOfProduction: "19.07.2021",
    specification: {
        type: "automatic",
    },
};

const defaultBrakes: Brakes = {
    image: "",
    name: "",
    dateOfProduction: "",
    specification: {
        padWear: "",
        control: "",
        meanFriction: "",
        heatConduct: "",
    },
};

const defaultTires: Tires = {
    image: "",
    name: "",
    dateOfProduction: "",
    specification: {
        rimDiameter: "",
        speedRating: "",
    },
};
const defaultEngine: Engine = {
    image: "",
    name: "",
    dateOfProduction: "",
    specification: {
        power: "",
        fuelConsumption: "",
        acceleration: "",
    },
};
const defaultGearBox: Gearbox = {
    image: "",
    name: "",
    dateOfProduction: "",
    specification: {
        type: "",
    },
};

export const SpecificationsForm = () => {

    const [brakes, setBrakes] = useState<Brakes>(defaultBrakes);
    const [tires, setTires] = useState<Tires>(defaultTires);
    const [engine, setEngine] = useState<Engine>(defaultEngine);
    const [gearbox, setGearbox] = useState<Gearbox>(defaultGearBox);
    const navigate = useNavigate();
    const onSubmit = () => {
        setBrakes(brakesInput);
        setTires(tiresInput);
        setEngine(engineInput);
        setGearbox(gearBoxInput);
    };

    return (
        <>
        <Header/>
        <StyledSpecificationsForm container justifyContent="center" alignItems="center">
            <Grid container sx={{ width: "100%" }} justifyContent="center" alignItems="center">
                <FormControl sx={{ width: "500px", height: "200px", justifyContent: "center", alignItems: "center", border: "1px dashed black", borderRadius: "5px", }}>
                    <input type="file" onChange={onSubmit} style={{ position: "absolute", left: "0", top: "0", opacity: "0%", width: "100%", height: "100%" }} />
                    <Typography color="primary">Click or drag to upload a file</Typography>
                </FormControl>
            </Grid>
            <Grid item lg={4} margin={"20px 20px 200px 20px"} flexDirection="column" justifyContent={"center"} alignItems={"center"}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Brakes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Pad wear</InputLabel>
                            <Input value={brakes.specification.padWear} onChange={(e) => {
                                setBrakes({ ...brakes, specification: { ...brakes.specification, padWear: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Control</InputLabel>
                            <Input value={brakes.specification.control} onChange={(e) => {
                                setBrakes({ ...brakes, specification: { ...brakes.specification, control: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Mean Friction</InputLabel>
                            <Input value={brakes.specification.meanFriction} onChange={(e) => {
                                setBrakes({ ...brakes, specification: { ...brakes.specification, meanFriction: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Heat Conduct</InputLabel>
                            <Input value={brakes.specification.heatConduct} onChange={(e) => {
                                setBrakes({ ...brakes, specification: { ...brakes.specification, heatConduct: e.target.value }, });
                            } }></Input>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Tires</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Rim diameter</InputLabel>
                            <Input value={tires.specification.rimDiameter} onChange={(e) => {
                                setTires({ ...tires, specification: { ...tires.specification, rimDiameter: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Speed Rating</InputLabel>
                            <Input value={tires.specification.speedRating} onChange={(e) => {
                                setTires({ ...tires, specification: { ...tires.specification, speedRating: e.target.value }, });
                            } }></Input>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Engine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Power</InputLabel>
                            <Input value={engine.specification.power} onChange={(e) => {
                                setEngine({ ...engine, specification: { ...engine.specification, power: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Fuel consumption</InputLabel>
                            <Input value={engine.specification.fuelConsumption} onChange={(e) => {
                                setEngine({ ...engine, specification: { ...engine.specification, fuelConsumption: e.target.value }, });
                            } }></Input>
                        </FormControl>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Acceleration</InputLabel>
                            <Input value={engine.specification.acceleration} onChange={(e) => {
                                setEngine({ ...engine, specification: { ...engine.specification, acceleration: e.target.value }, });
                            } }></Input>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Gearbox</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl color="primary" className={classes.formControl}>
                            <InputLabel>Type (automatic/manual)</InputLabel>
                            <Input value={gearbox.specification.type} onChange={(e) => {
                                setGearbox({ ...gearbox, specification: { ...gearbox.specification, type: e.target.value }, });
                            } }></Input>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Button className={classes.submitButton} variant="outlined" onClick={() => {
                navigate("/notselected");
            }}>See results</Button>
        </StyledSpecificationsForm></>
    );
}
