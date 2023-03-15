import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DragAndDrop from "./DragAndDrop";
import { Grid } from "@mui/material";

export default function Editor() {
  const { isAuthenticated } = useAuth0();

  return (
    (isAuthenticated && (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#fafaff",
          marginTop: "15%"
        }}
      >
        <DragAndDrop />
      </Grid>
    )) || (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#fafaff",
          marginTop: "15%"
        }}
      >
        <h2>Error: Debes logiarte para ingresar a este sitio</h2>
      </Grid>
    )
  );
}
