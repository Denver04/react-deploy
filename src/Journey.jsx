import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import grass from "./intern/assets/grass2.jpg";
import "./Journey.css"

function Journey(){
    return (
       <Box variant="h1" className="mainJourney">
       <img src={grass} className="img"></img>
       <h2>THE JOURNEY</h2>

       <div className='journey'>
           <h3>THE ROOTS</h3>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
       </div>
       <div  className='journey1'>
           <h3>CHAPTER I</h3>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
       </div>
       <div  className='journey2'>
            <h3>CHAPTER II</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
       </div>
       <div  className='journey3'>
            <h3>KICKSUP</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
       </div>

       </Box>
    );
}

export default Journey;