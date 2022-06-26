import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpecificationsForm } from './PartsForm/SpecificationsForm';
import {ThemeProvider} from "@mui/material";
import { theme } from "./Theme/Theme";
import SimpleAccordion from './DisplayParts/SimpleAccordion'
import Recommendation from "./DisplayParts/Recommendation";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/accordion" element={<SimpleAccordion/>}/>
                    <Route path="/" element={<SpecificationsForm/>}/>
                    <Route path="/recommendation" element={<Recommendation/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
