import "./App.css";
import { mockData } from "../mockData";
import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FixedDrawer } from "./components/FixedDrawer";
import { TopAppBar } from "./components/TopAppBar";
import { ContentWrapper } from "./components/ContentWrapper";

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
        formValues.id = data.length + 1;

        setData([...data, formValues]);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <TopAppBar />
                <FixedDrawer>
                    <Form handleSubmit={handleSubmit} />
                </FixedDrawer>
                <ContentWrapper data={data} isLoading={isLoading} />
            </Box>
        </ThemeProvider>
    );
}

export default App;
