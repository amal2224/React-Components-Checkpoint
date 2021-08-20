import React from 'react';
import  '../../App.css';

function FullName(){
    const name=prompt("Put your full name please : ");
    return(
        <>
        <p className="fullName">Full name : {name || "Unknown"}</p>
        </>
    );
}

export default FullName;