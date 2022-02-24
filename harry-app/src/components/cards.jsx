import React, { useEffect, useReducer } from "react";
import './cards.scss'
import Rectangule1 from "../assets/Rectangle 1.svg"
import { favoriteReducer } from "../reducers/favoriteReducer";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';




const init=()=>{
 return JSON.parse(localStorage.getItem("favorite")) || [];
}

export const Cards =({list})=>{
  
   const [state] = useReducer(favoriteReducer,[],init);
   const dispatche=useDispatch();

   const data = useSelector(state=>{
    return state
  })
  const dataFavorites=(data['favorite']);

               
   
   useEffect(()=>{
      localStorage.setItem("favorite", JSON.stringify(state));
     },[state])

      
      const handeleFavorite=(name, image)=>{

            if(dataFavorites.length<=4){
                   
        
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
                    text: 'Tu lista de favoritos esta llena, si requieres guardar uno mas, necesitas borrar algunn personaje de tu lista!',
                    
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
           {character.house==='Slytherin'?<div className="slytherin card__pic"><img src={character.image} className="card__image" alt="img personaje" /></div> 
                  : character.house==='Gryffindor' ? <div className="gryffindor card__pic"><img src={character.image} className="card__image" alt="img personaje" /></div>
                   :character.house==='Hufflepuff'?<div className="gryffindor card__pic"><img src={character.image} className="card__image" alt="img personaje" /></div>
                   :<div className="ravenclaw card__pic"><img  src={character.image} className="card__image" alt="img personaje" /></div>
            }

            {character.alive?<div className="card__info">
                      <div className="header_info">
                          <div><p>Vivo / </p></div>
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
                          <div><p>Muerto / </p></div>
                         
                          <div><img   onClick={ () => {  handeleFavorite(character.name, character.image); } } src={Rectangule1} /></div> 
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

