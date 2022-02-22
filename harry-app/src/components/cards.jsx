import React from "react";
import './cards.scss'
import PropType from "prop-types"

export const Cards=({
    name="",
    dateOfBirth="",
    gender="", 
    eyeColour="",
    hairColour="", 
    house="",
    image="",
    hogwartsStaff="",
    hogwartsStudent=""})=>{

    return(
        <>
    <div className="cointeiner">
        <div  className="card">
            <div className="card__pic">
              
               <img src={image} className="card__image" alt="brown couch" />
            </div>
            <div className="card__info">
            <h3>{name}</h3>
            <p>Cumple Años:<span>{dateOfBirth}</span></p>
            <p>Genero:<span>{gender}</span></p>
            <p>Color de ojos:<span>{eyeColour}</span></p>
           <p>Color de Pelo:<span>{hairColour}</span></p>
            </div>
          
        </div>
    </div>  


         {/* <p>Nombre:<span>{name}</span></p>
         <p>Cumple Años:<span>{dateOfBirth}</span></p>
         <p>Genero:<span>{gender}</span></p>
         <p>Color de ojos:<span>{eyeColour}</span></p>
         <p>Color de Pelo:<span>{hairColour}</span></p>
         <p>Casa:<span>{house}</span></p>
         <img src={image}/> */}
    </>
    )
    // eslint-disable-next-line no-unreachable
    Cards.prototype={
        name:PropType.string.isRequired
    }
    
}