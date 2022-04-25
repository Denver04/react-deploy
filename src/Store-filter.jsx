import { Filter } from "@mui/icons-material";
import React from "react";
import { Typography , Button} from "@mui/material";
import "./Store.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


function filter(){
    return(
        <div style={{position:"relative" , top:"35px"}}>
            <h3 className='filter'>Filter  <FilterAltOutlinedIcon style={{position: "relative" ,
            left: "10rem" ,
            bottom: "-0.4rem"}} /></h3>
            
                    <Typography className='cost' style={{fontSize:"1.6rem" , marginTop:53}}>Cost</Typography>
                    <div className="topping">
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 43}}> Rs. 1500-3000</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 43}}>Rs. 3000-5000</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 30}}>Rs. 5000 +</p>
                    </div>

                    <Typography className='cost' style={{fontSize:"1.6rem" , marginTop:12}}>Color</Typography>
                    <div className="topping">
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 7 , color:"red"}}>Red</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 15 , color:"purple"}}>Purple</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 7 , color:"blue"}}>Blue</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 13 , color:"green"}}>Green</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 10 , color:"black"}}>Black</p>
                    </div>

                    <Typography className='cost-design' style={{fontSize:"1.6rem" , marginTop:12}}>Desing Templates</Typography>
                    <div className="topping">
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /> <p style={{marginBottom:"0"}}>2</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom:"0"}}>3</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom:"0" , right: -7 ,position: "relative"}}>3 +</p>
                    </div>

                    <Typography className='cost' style={{fontSize:"1.6rem" , marginTop:12}}>Type</Typography>
                    <div className="topping">
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 24}}>Sneakers</p>
                        <input type="checkbox" id="topping" className='check' name="design" value="size" /><p style={{marginBottom: 0 ,
                        position: "relative" ,
                        left: 18}}>Loafers</p>
                    </div>

                    <Button variant="contained" size='small' style={{backgroundColor:"black" , position:"relative" , top:"4rem"}}>apply</Button>

        </div>
    )
};

export default filter;