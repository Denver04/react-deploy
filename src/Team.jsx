import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import "./Team.css";
import CR from "./intern/assets/cr3.jpg";
import James from "./intern/assets/james.jpg";
import Toni from "./intern/assets/tonikroos.jpg";
import Zid from "./intern/assets/zidane.jpg";
import iker from "./intern/assets/ikercasillas.jpg";
import Linkedin from "./intern/assets/linkedin.png"
import fb from "./intern/assets/facebook.png"
import insta from "./intern/assets/insta.png";
import twitter from "./intern/assets/twitter.png";
import nba from "./intern/assets/Team.png";

function Team(){
    return (
       <Box variant="h1">
        <h1 className='Team-h1'>Without Bonding snd Coordination, every project is a failure. Look at who amkes Kicksup great :)</h1>
        <div className='flex'>
        <div className='Teamname'>
            <img src={CR} className="imageTeam"></img>
            <h5>Christiano</h5>
            <h6>Financial Operations</h6>
            <img src={fb} className="logoTeam"></img>
            <img src={insta} className="logoTeam"></img>
        </div>
        <div className='Teamname'>
            <img src={James} className="imageTeam"></img>
            <h5>James</h5>
            <h6>Preoduct designer</h6>
            {/* <img src={fb} className="logoTeam link"></img> */}
            <img src={twitter} className="logoTeam"></img>
        </div>
        <div className='Teamname'>
            <img src={Toni} className="imageTeam"></img>
            <h5>Toni Kroos</h5>
            <h6>Product developer</h6>
            <img src={fb} className="logoTeam"></img>
            {/* <img src={fb} className="logoTeam"></img> */}
        </div>
        <div className='Teamname'>
            <img src={Zid} className="imageTeam"></img>
            <h5>Zidane</h5>
            <h6>Leaderships and management</h6>
            {/* <img src={fb} className="logoTeam"></img> */}
            {/* <img src={nba} className="logoTeam nba"></img> */}
            <img src={insta} className="logoTeam"></img>
        </div>
        <div className='Teamname'>
            <img src={iker} className="imageTeam"></img>
            <h5>Iker casillas</h5>
            <h6>Marketing strategy</h6>
            <img src={twitter} className="logoTeam"></img>
            <img src={fb} className="logoTeam"></img>
        </div>
        </div>

        <h1 style={{paddingBottom:"30px" , fontWeight:"bold"}}> and You! ;)</h1>
       </Box>
    );
}

export default Team;