import { AppBar, Toolbar, Typography } from "@mui/material";

export const TopAppBar = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="subtitle1">🚀 ROCKETSTORE</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
