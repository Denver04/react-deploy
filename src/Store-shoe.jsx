import react from "react";
import { Button } from '@mui/material';
// import Hello from "./Store-filter";
// import Cart from "./Store-cart";
import Shoe from "./intern/assets/shoe10.jpg";
import Shoe2 from "./intern/assets/shoe3.jpg";
import { Rating } from '@mui/material';

function Shoes(){
    return(
        <div style={{position:"relative" , top:"35px"}}>
            <h3 className='filter'>Shoes <Button variant='outlined' style={{position: "relative" ,
                    left: "24rem" ,
                    padding: "3px 3px" ,  color:"black"}}>sort by</Button> </h3>
                    <div className='store-shoes'>
                        <div>
                            <div className='store-img' style={{backgroundColor:"rgb(242 208 208)"}}>
                                <img src={Shoe2} ></img>
                            </div>
                            <p className='store-p'>KSW 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                        <div >
                            <div className='store-img'>
                            <img src={Shoe}></img>
                            </div>
                            <p className='store-p'>ROYAL S 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                        <div >
                            <div className='store-img' style={{backgroundColor:"rgb(242 208 208)"}}>
                            <img src={Shoe2}></img>
                            </div>
                            <p className='store-p'>KSW 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                    </div>
                    <div className='store-shoes'>
                        <div>
                            <div className='store-img' style={{backgroundColor:"rgb(242 208 208)"}}>
                                <img src={Shoe2}></img>
                            </div>
                            <p className='store-p'>KSW 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                        <div >
                            <div className='store-img' >
                            <img src={Shoe}></img>
                            </div>
                            <p className='store-p'>ROYAL S 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                        <div >
                            <div className='store-img' style={{backgroundColor:"rgb(242 208 208)"}}>
                            <img src={Shoe2}></img>
                            </div>
                            <p className='store-p'>KSW 01</p>
                            <p className='store-cost'>Rs. 20000/-</p>
                            <div className='store-rating'><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly /></div>
                        </div>
                    </div>
                    
        </div>
    )
};

export default Shoes;