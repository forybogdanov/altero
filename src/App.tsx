import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './PartsForm/Home';
import {ThemeProvider} from "@mui/material";
import { theme } from "./Theme/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;