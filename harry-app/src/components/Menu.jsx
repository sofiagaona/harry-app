/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Rectangule1 from "../assets/Rectangle1.png"
import addCharacter from "../assets/User_fill_add.png"
import "./Menu.scss";
import Modal from "./ModalCharact"
import trash from "../assets/Trash.png"



export const Menu = () => {

  const data = useSelector(state=>{
    return state
  })

  const dataFavorites=(data['favorite']);
 
    
  const [modalIsOpen, setIsOpen] = useState(false);
    
  function openModal() {
    setIsOpen(true);
  }
  
  function handleModal(){
    setIsOpen(false)
  }
     

    return(
        <><nav className="menu">
        <ul className="flex-menu">
          <li> <button className="btn-favorite"> FAVORITOS <span><img src={Rectangule1} alt="" /></span></button>
             <ul  id="sub-menu">
                  {dataFavorites.map((character)=>(
                  <li>
                    {console.log(character.img)}
                    <div className="ravenclaw card__pic"><img  src={character.img} className="card__image" alt="img personaje" /></div>
                    <div className="ravenclaw card__pic"><img  src={trash} className="card__image" alt="img trash" /></div>
                    {/* <a href=" ">{character.name}</a> */}
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