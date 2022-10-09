import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import "./Header.scss";
import { Link } from "@mui/material";
import { Container } from "@mui/system";
export type IHeaderProps = {};

const Header: React.FC<IHeaderProps> = () => {
  return (
    <Box className="header-wrapper" sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to="/">
              DEMO Streaming
            </Link>
          </Typography>
          <Box>
            <Button color="inherit">Login</Button>
            <Button variant="contained" color="secondary">
              Start your free trial
            </Button>
          </Box>
        </Toolbar>
      </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
