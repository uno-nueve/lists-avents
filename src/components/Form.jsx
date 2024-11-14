import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

export const Form = ({ handleSubmit }) => {
    const categorias = [
        { value: "electronica", label: "Electrónica" },
        { value: "muebles", label: "Muebles" },
        { value: "electrodomesticos", label: "Electrodomésticos" },
        { value: "juguetes", label: "Juguetes" },
        { value: "libros", label: "Libros" },
    ];

    return (
        <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Typography variant="h4" gutterBottom>
                Nuevo Producto
            </Typography>
            <TextField fullWidth size="small" label="Nombre" id="nombre" name="nombre" />
            <TextField
                fullWidth
                size="small"
                label="Precio"
                type="number"
                id="precio"
                name="precio"
            />
            <TextField
                fullWidth
                select
                size="small"
                label="Categoría"
                id="categoria"
                name="categoria"
            >
                {categorias.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" type="submit">
                Añadir
            </Button>
        </Box>
    );
};
