import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import uniqid from "uniqid";

import "./ModalAddCharacter.scss";
import Swal from 'sweetalert2';
import { getBase64 } from "../utils/getBase64/getBase64";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export const ModalAddCharacter = ({ modalIsOpen, closeModal }) => {
  const [formValue, setFormValue] = useState({
    id: uniqid(),
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: "",
    hogwartsStaff: "",
    image: "",
    house: "",
    alive: "",
  });

  const EventInputChange = ({ target }) => {
    const key = target.name;

    if (!key) return;

    setFormValue({
      ...formValue,
      [key]: target.value,
    });
  };

  const fnheandleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://apiharry.herokuapp.com/characteres", formValue);

    closeModal();
    alert('se ha creado con éxito el personaje')
    window.location.reload(true);
  };

  async function processImage(event) {
    const imageFile = event.target.files[0];
    const base64Image = await getBase64(imageFile);

    setFormValue({
      ...formValue,
      image: base64Image,
    });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <div className="box-btn-close">
        <button type="button" className="closeButton" onClick={closeModal}>
          X
        </button>
      </div>

      <form action="" onSubmit={fnheandleSubmit}>
        <div className="modal">
          <div className="raw-item">
            <label>
              NOMBRE:
              <input type="text" name="name" onChange={EventInputChange} />
            </label>
            <label>
              CUMPLEAÑOS:
              <input
                type="text"
                name="dateOfBirth"
                onChange={EventInputChange}
              />
            </label>
          </div>
        </div>
        <div className="modal">
          <div className="raw-item">
            <label>
              COLOR DE OJOS:
              <input type="text" name="eyeColour" onChange={EventInputChange} />
            </label>
            <label>
              COLOR DE PELO:
              <input
                type="text"
                name="hairColour"
                onChange={EventInputChange}
              />
            </label>
          </div>
        </div>
        <div className="modal">
          <div className="raw-item">
            <label>
              Casa:
              <select name="house" onClick={EventInputChange}>
                <option value="Hogwarts">Hogwarts</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Revendaw">Revendaw</option>
                <option value="Slytherin">Slytherin</option>
              </select>
            </label>
            <label>
              Vivo:
              <select name="alive" onClick={EventInputChange}>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </label>
          </div>
        </div>
        <div className="modal">
          <div className="raw-item">
            <label>
              GENERO:
              <div className="raw-item">
                <div className="raw-item btn-radio">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    onChange={EventInputChange}
                    value="female"
                  />
                  <label htmlFor="female">Mujer</label>
                </div>

                <div className="raw-item btn-radio">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    onChange={EventInputChange}
                    value="male"
                  />
                  <label htmlFor="male">Hombre</label>
                </div>
              </div>
            </label>
            <label>
              POSICION:
              <div className="raw-item">
                <div className="raw-item btn-radio">
                  <input
                    type="radio"
                    id="student"
                    name="hogwartsStudent"
                    onChange={EventInputChange}
                    value={true}
                  />
                  <label htmlFor="student">Estudiante </label>
                </div>

                <div className="raw-item btn-radio">
                  <input
                    type="radio"
                    id="staff"
                    name="hogwartsStaff"
                    onChange={EventInputChange}
                    value={true}
                  />
                  <label htmlFor="staff">Staff</label>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="modal">
          <div className="raw-item input-file">
            <label htmlFor="image">FOTOGRAFIA </label>
            <input
              data-testid="upload-profile-image"
              type="file"
              id="image"
              name="image"
              accept="image/png"
              onChange={processImage}
            />
          </div>
        </div>
        <div className="btn-submit">
          <button type="submit">GUARDAR</button>
        </div>
      </form>
    </Modal>
  );
};
