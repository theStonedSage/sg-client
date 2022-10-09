import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Container } from "@mui/material";

export type ITitleBarProps = {
  title: string;
};

const TitleBar: React.FC<ITitleBarProps> = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: grey[900] }} position="relative">
          <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default TitleBar;
