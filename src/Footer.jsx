import { Box } from "@mui/system";
import React from "react";
import fb from "./intern/assets/facebook.png";
import insta from "./intern/assets/insta.png";
import twitter from "./intern/assets/twitter.png";
import "./App.css";


function Footer(){
    return (
        <Box className="Footer">
            <Box variant="h4" className="footer-text" >
                Stay in touch
            </Box>
            <img src={fb} className="footer" />
            <img src={insta} className="footer" />
            <img src={twitter} className="footer" />

        </Box>
        
    )
}

export default Footer;