import React from 'react';
import  '../../App.css';

function Address(){
    const address=prompt("Put your address please : ");
    return(
        <>
        <p className="address">Address : {address || "Unknown"}</p>
        </>
    );
}

export default Address;