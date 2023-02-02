import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
    return (
        <BrowserRouter>
        <routes>
        <Route path="/" element={App}/>
        </routes>
        </BrowserRouter>
    )
}

export default AppRouter