import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./Footer.scss";
export type IFooterProps = {};

const footerOptions = [
  " Home",
  " Terms and conditions",
  " Privacy Policy",
  " Collection statement",
];

function Copyright() {
    return (
      <div >
        {'Copyright © '}
        <Link color="inherit" href="#">
          Demo Streaming All rights reserved
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    );
  }

const Footer: React.FC<IFooterProps> = () => {
  return (
    <Box className="footer-wrapper">
      <Container className="footer-container" maxWidth="lg">
          <Box sx={{ display: "flex",justifyContent:"space-between" }} maxWidth="60%">
            {footerOptions.map((o) => (
                <>
              <Typography variant="h6">{o}</Typography>
              <span>|</span>
              </>
            ))}
          </Box>
          <Copyright />
          <Box className="icons-wrapper">
              <Box>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </Box>
          </Box>
      </Container>
    </Box>
  );
};

export default Footer;
