import React, { useState } from "react";
import Rectangule1 from "../assets/Rectangle1.png"
import addCharacter from "../assets/User_fill_add.png"
import "./Menu.scss";
// import ModalReact from "./ModalAddCharacter";
// import { ModalCharacter } from "./ModalCharact";
// import Modal from "./ModalCharact"


export const Menu = () => {
    
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
            {/* <button className="btn-favorite">FAVORITOS
              <span><img src={Rectangule1} alt="" /></span>
            </button> */}
            <ul id="sub-menu">
              <li><a href=" ">Enlace 2.1</a></li>
              <li><a href=" ">Enlace 2.2</a></li>
              <li><a href=" ">Enlace 2.3</a></li>
            </ul>

          </li>
          <li>
            <button type="button" className="btn-add" onClick={openModal}>AGREGAR
              <span><img src={addCharacter} alt="" /> </span>
              {/* {modalIsOpen && (
                
                <Modal
                  isVisible={modalIsOpen}
                  handleModal={handleModal}
                  />
              )} */}
            </button>
          </li>

        </ul>
      </nav></>
    )
}