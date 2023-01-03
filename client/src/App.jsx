import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { createBrowserRouter, RouterProvider, Navigate, createRoutesFromElements, Route } from "react-router-dom";
import { Layout, Dashboard, Products, Customers, Transactions, Geography, Overview, Daily, Monthly, Breakdown, Admin, Performance } from "./scenes";


const App = () => {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<Layout />}>
                    <Route path="/" index element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/daily" element={<Daily />} />
                    <Route path="/monthly" element={<Monthly />} />
                    <Route path="/breakdown" element={<Breakdown />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/performance" element={<Performance />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace  />} />
                </Route>
            </>
        )
    )

    return  (
        <div className="app">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    )
}

export default App