"use client";

import React from "react";
import { Box, Typography, Link, Container, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width:"75%",
        py: 4,
        backgroundColor: "#03070F",
        color: "white",
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 40, sm: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#487EB0" ,fontSize:"21px"}}>
             SmartLearn
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color:"#A9A9A9",fontSize:"17px"}}>
            Transform the way you learn with our AI tool that provides real-time feedback, customized resources, and engaging content.
            </Typography>
          </Grid>
          <Grid size={{ xs: 40, sm: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#487EB0",fontSize:"21px" }}>
              Links
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block", mb: 1 }}>
                Home
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block", mb: 1 }}>
                Features
              </Link>
              
              <Link href="#" underline="hover" sx={{ color: "#A9A9A9", display: "block" }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#487EB0" ,fontSize:"21px" }}>
              Contact Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.linkedin.com/in/zunair-ali-698b71270" target="_blank" sx={{ color: "#E5E5E5" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/Zunair890" target="_blank" sx={{ color: "#E5E5E5" }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="mailto:ranazunairali007@gmail.com" sx={{ color: "#E5E5E5" }}>
                <EmailIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color:"#A9A9A9",fontSize:"16px"  }}>
              Email: support@SmartLearn.com
            </Typography>
            <Typography variant="body2"sx={{ color:"#A9A9A9",fontSize:"16px" }}>
              Address:  AE Time Square, New York City
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ width:"100%",mt: 4, textAlign: "center", borderTop: "1px solid #333", pt: 3,fontSize:"20px" }}>
          <Typography variant="body2" sx={{ color: "#487EB0", fontSize:"15px" }}>
            &copy; {new Date().getFullYear()} SmartLearn. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}