import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";


const MainPage = () => {
    return(
        <div>
        <div><h1>Home Page</h1></div>
        <div>
            <Link to="/">
            <Button>LOGOUT</Button>
            </Link>
        </div>
        </div>
    )

}

export default MainPage;