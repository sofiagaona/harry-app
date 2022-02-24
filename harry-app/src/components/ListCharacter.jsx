/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useReducer } from "react";
import Rectangule1 from "../assets/Rectangle 1.svg"
import { favoriteReducer } from "../reducers/favoriteReducer";

const init=()=>{
    return JSON.parse(localStorage.getItem("favorite")) || [];
   }

export const ListCharacter=({
    name="",
    dateOfBirth="",
    gender="", 
    eyeColour="",
    hairColour="", 
    house="",
    image="",
    hogwartsStaff="",
    hogwartsStudent="",
    alive="",
})=>{




     const [state, dispatche] = useReducer(favoriteReducer,[],init);
               
      
               useEffect(()=>{
                  localStorage.setItem("favorite", JSON.stringify(state));
              },[state])


    let status = ''

if(hogwartsStaff){
    status='Staff';
    
}
else{
    status='Estudiante';
   
}

const handeleFavorite=()=>{
   
    const newFavorite={
                        name:name,
                        image:image
                    };
                  
        
                    const action ={
                        type:'ADD',
                        payload:newFavorite
                    };
        
                    dispatche(action);
}
return (
   
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
                          <div><img onClick={handeleFavorite}src={Rectangule1} /></div> 
                      </div>
                       <h5>                   
</h5>
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
                          <div><p>Muerto / {status}</p></div>
                          <div><img name={name}  onClick={handeleFavorite} src={Rectangule1} /></div> */
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
}