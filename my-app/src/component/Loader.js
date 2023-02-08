import React from 'react';
import Spinner from "../gif/Spinner.gif"

const Loader = () => {
    return (
        
        <div>
            <img src={Spinner} alt="Spinner"/>
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;