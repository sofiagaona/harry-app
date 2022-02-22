import React, { useState } from "react"
import Modal from 'react-modal';
import axios from "axios";
import uuid from 'react-uuid';
import './ModalAddCharacter.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const ModalCharacter=( {isVisible, handleModal} )=>{
    const [modalIsOpen, setIsOpen] = useState(isVisible);    
    const [formValue, setFormValue]= useState({
        "id":uuid(),
        "name":"",
        "birthday":"",
        "eyesColour":"",
        "haireColour":"",
        "gender":"",
        "position":"",
        "picture":""
    })

    const EventInputChange=({target})=>{
         setFormValue({
             ...formValue,
             [target.name]:target.value
         })
    }

    function closeModal() {
        handleModal();
        setIsOpen(false);
       
      }

  const fnheandleSubmit =  (e) => {
        e.preventDefault();
        console.log(formValue);
        axios.post(` http://localhost:3000/characteres`, { formValue })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      closeModal();
        
      };

 
 return (
    <Modal
    isOpen={modalIsOpen}
    // onAfterOpen={afterOpenModal}
    //onRequestClose={closeModal}
    style={ customStyles }
    closeTimeoutMS={200}
  >
    
    <div className="box-btn-close">
       <button type="button" className="closeButton" onClick={closeModal}>X</button>
    </div>
   
    <form  action="" onSubmit={fnheandleSubmit}>
              <div className="modal">
                  <div className="raw-item">
                 <label>NOMBRE:
                    <input type="text" name="name" onChange={EventInputChange} />
                 </label>
                 <label>CUMPLEAÑOS:
                    <input type="text" name="birthday" onChange={EventInputChange} />
                    
                 </label>
                 </div>
              </div>
               <div className="modal">
               <div className="raw-item">
                  <label>COLOR DE OJOS:
                      <input type="text" name="eyesColour" onChange={EventInputChange} />
                  </label>
                  <label>COLOR DE PELO:
                      <input type="text" name="haireColour" onChange={EventInputChange}/>
                  </label>
                  </div>
              </div>
              <div className="modal">
               <div className="raw-item">
                  <label>GENERO:
                   <div className="raw-item" >   
                    <div className="raw-item btn-radio">
                       <input type="radio" id="female" name="gender" onChange={EventInputChange} value="female"  />
                       <label  htmlFor="female">Mujer </label>
                    </div>

                       <div className="raw-item btn-radio">
                           <input type="radio" id="male" name="gender" onChange={EventInputChange} value="male" /> 
                           <label htmlFor="male">Hombre</label>  
                        </div>
                  </div>
                  </label>
                  <label>POSICION:
                   
                  <div className="raw-item" >   
                    <div className="raw-item btn-radio">
                       <input type="radio" id="student" name="position" onChange={EventInputChange} value="student"  />
                       <label  htmlFor="student">Estudiante </label>
                    </div>

                       <div className="raw-item btn-radio">
                           <input type="radio" id="staff" name="position" onChange={EventInputChange} value="staff" /> 
                           <label htmlFor="staff">Staff</label>  
                        </div>
                  </div>
                  
                  </label>
                  </div>
              </div>
               <div className="modal">
                   <div className="raw-item input-file">
                       <label  htmlFor="picture">FOTOGRAFIA </label>
                       <input type="file" id="picture" name="picture" onChange={EventInputChange} />
                    </div>
               </div>
               <div className="btn-submit">
                    <button type="submit">GUARDAR</button>
               </div>
            </form>
  
  </Modal>
 )

}
export default ModalCharacter;