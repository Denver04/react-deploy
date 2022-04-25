import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "./Store.css";
import { Button } from '@mui/material';

function Cart(){
    return(
        <div style={{position:"relative" , top:"35px"}}>

            <h3 className='filter'>Cart <LocalMallIcon style={{
            position: "relative" ,
            bottom: "-0.4rem" ,
            left: "10rem" }} /> </h3>

        <p style={{position:"relative" , top:"16rem"}}>What's stopping you, designer?</p>

        <div style={{position: "relative" ,top: "27rem" ,right: "6rem"}}>
            < LocationOnIcon /> Home
        </div>
        <div style={{position: "relative" ,top: "25.3rem" ,left: "1.3rem"}}>
            <CalendarMonthIcon />Select Date
        </div>

        <Button variant="contained" size='small' style={{backgroundColor:"grey" , position:"relative" , top:"30.5rem"}}>Order Now</Button>
        </div>
    )
}

export default Cart;