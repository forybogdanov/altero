import styled from "@emotion/styled";
import { Grid } from "@mui/material";


const SPECIFICATIONS_FORM_PREFIX = "pecificationsForm";

export const specificationsFormClasses = {
    root: `${SPECIFICATIONS_FORM_PREFIX}-root`,
    formControl: `${SPECIFICATIONS_FORM_PREFIX}-formControl`,
    partLabel: `${SPECIFICATIONS_FORM_PREFIX}-partLabel`,
    accordion: `${SPECIFICATIONS_FORM_PREFIX}-accordion`,
    submitButton: `${SPECIFICATIONS_FORM_PREFIX}-submitButton`,
};


export const StyledSpecificationsForm = styled(Grid)(({ theme }) => ({
    [`&.${specificationsFormClasses.root}`]: {},
    [`& .${specificationsFormClasses.formControl}`]: {
        marginBottom: "20px",
        width: "100%",
    },
    [`& .${specificationsFormClasses.partLabel}`]: {
        marginBottom: "30px",
    },
    [`& .${specificationsFormClasses.accordion}`]: {
        width: "100%",
    },
    [`& .${specificationsFormClasses.submitButton}`]: {
        position: "fixed",
        bottom: "50px",
    },
}));