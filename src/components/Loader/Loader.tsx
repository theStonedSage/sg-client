import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid } from "@mui/material";

export type ILoaderProps = {};

const Loader: React.FC<ILoaderProps> = ({}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loader;
