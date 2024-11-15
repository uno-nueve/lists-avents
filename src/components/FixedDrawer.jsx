import { Box, Drawer, Toolbar } from "@mui/material";

export const FixedDrawer = ({ children }) => {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: 450,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 450, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto", p: 3 }}>{children}</Box>
            </Drawer>
        </>
    );
};
