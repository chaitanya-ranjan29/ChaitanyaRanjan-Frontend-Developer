import React from "react";
import './Card.css'
import image from '../../assets/images/capsules.jpg'

function Card({ info, handleDisplay, handleClicked }) {

    function showDetails(e) {
        // alert("click")
        console.log(info)
        handleDisplay(info);
        handleClicked();
    }

  return (
    <div className="card" onClick={showDetails}>
        <img src={image} style={{width: "100%", display: "block"}}/>
        <p className="card-details">Click to See Details</p>
    </div>
  );
}

export default Card;



