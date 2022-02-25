import React, { useEffect, useReducer, useState } from "react";
import './cards.scss'
import Rectangule1 from "../assets/Rectangle 1.svg"
import { favoriteReducer } from "../reducers/favoriteReducer";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';




const init=()=>{
   
    return JSON.parse(localStorage.getItem("favorite")) || [];
}

export const Cards =({list})=>{
   
   let position="";
   const [state] = useReducer(favoriteReducer,[],init);
   const dispatche=useDispatch();

   const data = useSelector(state=>{
    return state
  })
  const dataFavorites=(data['favorite']);

               
   
   useEffect(()=>{
      localStorage.setItem("favorite", JSON.stringify(data));
     },[data])


     if(list[0]!==undefined){
         let staff =list[0].hogwartsStaff;
         staff ? position="Staff" : position="Student"
    }
      
      const handeleFavorite=(name, image)=>{

         let duplicado = dataFavorites.filter((favorite)=>{
               return favorite.name===name
           })


            if((dataFavorites.length<=4)&&(duplicado.length===0)){
                   
        
                    const newFavorite={
                        img:image,
                        name:name
                    };
                  
        
                    const action ={
                        type:'ADD',
                        payload:newFavorite
                    };
        
                    dispatche(action);
                    
            }

            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se permiten más de 5 personajes en la lista, o personajes duplicados, verifica tu lista!',
                    
                  })
            }
        }
            

    return (
        <>
        <ul>
            <div class="card-1">
            
           
           
            
         {list.map((character) => (
             
<div className="card-col2">
     <li key={character.name}>
                      
        
        <div  className="card">
           {character.house==='Slytherin'?<div className="slytherin card__pic "><img src={character.image} className="card__image" alt="img personaje" /></div> 
                  : character.house==='Gryffindor' ? <div className="gryffindor card__pic "><img src={character.image} className="card__image " alt="img personaje" /></div>
                   :character.house==='Hufflepuff'?<div className="gryffindor card__pic"><img src={character.image} className="card__image " alt="img personaje" /></div>
                   :<div className="ravenclaw card__pic "><img  src={character.image} className="card__image smth" alt="img personaje " /></div>
            }

            {character.alive?<div className="card__info">
                      <div className="header_info ">
                          <div><p>Vivo / {position}</p></div>
                          <div><img onClick={ () => { handeleFavorite(character.name, character.image); } } src={Rectangule1} />
                         </div> 
                      </div>
                       <h5>  {character.name} </h5>
                       <div className="box-info">
                          <p>Cumple Años:<span>{character.dateOfBirth}</span></p>
                          <p>Genero:<span>{character.gender}</span></p>
                          <p>Color de ojos:<span>{character.eyeColour}</span></p>
                          <p>Color de Pelo:<span>{character.hairColour}</span></p>
                       </div>
                   </div> 
                  
                   :
                   <div className=" dead card__info">
                       <div className="header_info">
                          <div><p>Muerto / {position} </p></div>
                         
                          <div><img  id="btn-add-favorite" onClick={ () => {  handeleFavorite(character.name, character.image); } } src={Rectangule1} /></div> 
                      </div>
                   <h5>{character.name}</h5>
                   <div className="box-info">
                      <p>Cumple Años:<span>{character.dateOfBirth}</span></p>
                      <p>Genero:<span>{character.gender}</span></p>
                      <p>Color de ojos:<span>{character.eyeColour}</span></p>
                      <p>Color de Pelo:<span>{character.hairColour}</span></p>
                   </div>
                  
               </div> 

               
            } 
          
        </div>
    
     
     </li>
     </div>            ))}
    </div>
    </ul>
    </>
    )
}

