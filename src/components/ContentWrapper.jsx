import { Box, CircularProgress, Toolbar } from "@mui/material";
import { DisplayTable } from "./Table";

export const ContentWrapper = ({ isLoading, data }) => {
    return (
        <>
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
        </>
    );
};
