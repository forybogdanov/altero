import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpecificationsForm } from './PartsForm/SpecificationsForm';
import {ThemeProvider} from "@mui/material";
import { theme } from "./Theme/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SpecificationsForm/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
