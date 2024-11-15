import "./App.css";
import { mockData } from "../mockData";
import { useState, useEffect } from "react";
import { DisplayTable } from "./components/Table";
import { Form } from "./components/Form";
import {
    AppBar,
    Box,
    CircularProgress,
    createTheme,
    CssBaseline,
    Drawer,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@mui/material";

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(mockData);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        formValues._id = data.length + 1;

        setData([...data, formValues]);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="subtitle1">🚀 ROCKETSTORE</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 450,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 450, boxSizing: "border-box" },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "auto", p: 3 }}>
                        <Form handleSubmit={handleSubmit} />
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, height: "93vh" }}>
                    <Toolbar />
                    <div style={{ height: "100%" }}>
                        {isLoading ? (
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CircularProgress />
                            </div>
                        ) : (
                            <DisplayTable data={data} />
                        )}
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
