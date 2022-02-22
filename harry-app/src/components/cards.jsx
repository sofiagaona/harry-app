/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from "react";
import './cards.scss'
import PropType from "prop-types"
import Rectangule1 from "../assets/Rectangle 1.svg"

export const Cards=({
    name="",
    dateOfBirth="",
    gender="", 
    eyeColour="",
    hairColour="", 
    house="",
    image="",
    hogwartsStaff="",
    hogwartsStudent="",
    alive=""})=>{

let status = ''

if(hogwartsStaff){
    status='Staff';
    
}
else{
    status='Estudiante';
   
}



        const handeleFavorite=()=>{
            console.log('si entra');
        }

    return(
        <>
    <div className="cointeiner">
        <div  className="card">
            {house==='Slytherin'?<div className="slytherin card__pic"><img src={image} className="card__image" alt="img personaje" /></div> 
                  : house==='Gryffindor' ? <div className="gryffindor card__pic"><img src={image} className="card__image" alt="img personaje" /></div>
                   :house==='Hufflepuff'?<div className="gryffindor card__pic"><img src={image} className="card__image" alt="img personaje" /></div>
                   :<div className="ravenclaw card__pic"><img src={image} className="card__image" alt="img personaje" /></div>
            }

            {alive?<div className="card__info">
                      <div className="header_info">
                          <div><p>Vivo / {status}</p></div>
                          <div><img onClick={handeleFavorite} src={Rectangule1} /></div>
                      </div>
                       <h5>{name}</h5>
                       <div className="box-info">
                          <p>Cumple Años:<span>{dateOfBirth}</span></p>
                          <p>Genero:<span>{gender}</span></p>
                          <p>Color de ojos:<span>{eyeColour}</span></p>
                          <p>Color de Pelo:<span>{hairColour}</span></p>
                       </div>
                   </div> 
                  
                   :
                   <div className=" dead card__info">
                       <div className="header_info">
                          <div><p>Muero / {status}</p></div>
                          <div><img onClick={handeleFavorite} src={Rectangule1} /></div>
                      </div>
                   <h5>{name}</h5>
                   <div className="box-info">
                      <p>Cumple Años:<span>{dateOfBirth}</span></p>
                      <p>Genero:<span>{gender}</span></p>
                      <p>Color de ojos:<span>{eyeColour}</span></p>
                      <p>Color de Pelo:<span>{hairColour}</span></p>
                   </div>
               </div> 
            } 
          
        </div>
    </div>  

    </>
    )
    // eslint-disable-next-line no-unreachable
    Cards.prototype={
        name:PropType.string.isRequired
    }
    
}