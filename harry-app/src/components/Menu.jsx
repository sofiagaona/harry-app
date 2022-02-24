/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Rectangule1 from "../assets/Rectangle1.png"
import addCharacter from "../assets/User_fill_add.png"
import "./Menu.scss";
import Modal from "./ModalCharact"
import trash from "../assets/Trash.png"
import { useDispatch } from "react-redux";
import { favoriteReducer } from "../reducers/favoriteReducer";
import Swal from 'sweetalert2'


const init=()=>{
  return JSON.parse(localStorage.getItem("favorite")) || [];
 }

export const Menu = () => {

  const [state] = useReducer(favoriteReducer,[],init);
  const dispatche=useDispatch();
  const data = useSelector(state=>{
    return state
  })
  const dataFavorites=(data['favorite']);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    localStorage.setItem("favorite", JSON.stringify(data));
   },[data])
    
  function openModal() {
    setIsOpen(true);
  }
  
  function handleModal(){
    setIsOpen(false)
  }

  function delateFavorite(name){
     console.log(name);
     const deleteCharacter={
           name:name
  };


  const action ={
      type:'DELETE',
      payload:deleteCharacter
  };

  dispatche(action);
  }

  const listCharacteres=()=>{
    
   if(dataFavorites.length===0){
    Swal.fire(
     
      "No tienes ningun personaje marcado en lista de favoritos, por favor selecciona uno para visualizar lista",
      'success'
    )
    
   }
  }
     

    return(
        <><nav className="menu">
        <ul className="flex-menu">
          <li> <button onClick={listCharacteres} className="btn-favorite"> FAVORITOS <span><img src={Rectangule1} alt="" /></span></button>
             <ul>
                  {dataFavorites.map((character)=>(
                  <li>
                   
                      <div className="box_favorites_row">
                          <img  src={character.img}  alt="img personaje" />
                          <p>{character.name}</p>
                          <img onClick={ () => { delateFavorite(character.name); } } src={trash}  alt="img trash" />
                        </div>
                        <hr/>
                  </li>
                 
                  ))}
                  
             </ul>
           
          </li>
          <li>
            <button type="button" className="btn-add" onClick={openModal}>AGREGAR
              <span><img src={addCharacter} alt="" /> </span>
              {modalIsOpen && (
                
                <Modal
                  isVisible={modalIsOpen}
                  handleModal={handleModal}
                  />
              )}
            </button>
          </li>

        </ul>
      </nav></>
    )
}