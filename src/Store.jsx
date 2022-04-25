import { Box } from '@mui/system';
import React from 'react';
import "./Store.css";
import Filters from "./Store-filter";
import Cart from "./Store-cart";
import Shoe from './Store-shoe';


function Store(){
    return (
       <Box variant="h1">
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-lg-3 col-md-4 col-sm-6 store-design">
                    <Filters />
                    </div>


                    <div class="col-lg-6 store-design">
                     <Shoe />
                    </div>


                    <div class="col-lg-3 col-md-4 col-sm-6 store-design">
                        <Cart />
                    </div>

                </div>
            </div>
       </Box>
    );
}

export default Store;