import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const DisplayTable = ({ data }) => {
    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        { field: "nombre", headerName: "Producto", width: 320 },
        { field: "precio", headerName: "Precio", width: 100 },
        { field: "categoria", headerName: "Categoría", width: 180 },
    ];

    return (
        <Paper sx={{ minWidth: 650, width: "100%", p: 3 }}>
            <DataGrid rows={data} columns={columns} sx={{ border: 0 }} getRowId={(r) => r._id} />
        </Paper>
    );
};
