import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import "./Contact.css";

function Contact(){
    return (
       <Box variant="h1" className="contact">
        <h1>REACH US AT</h1>
        <Box>
        <div className='info'>
            <h5 className='info-h'>support@kicksup.com</h5>
            <p className='info-p'>for any technical support</p>
        </div>
        <div className='info'>
            <h5 className='info-h'>info@kicksup.com</h5>
            <p className='info-p'>for more information</p>
        </div>
        <div className='info'>
            <h5 className='info-h'>feedback@kicksup.com</h5>
            <p className='info-p'>to send your feedback</p>
        </div>
        <div className='info'>
            <h5 className='info-h'>jobs@kicksup.com</h5>
            <p className='info-p'>to work with us</p>
        </div>
            
        </Box>
       </Box>
    );
}

export default Contact;