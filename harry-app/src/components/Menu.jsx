import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import Swal from "sweetalert2";

import Rectangule1 from "../assets/Rectangle1.png";
import addCharacter from "../assets/User_fill_add.png";
import "./Menu.scss";
import { ModalAddCharacter } from "./ModalAddCharacter";
import trash from "../assets/Trash.png";

export const Menu = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const [modalIsOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = async () => {
    await setModal(false);
    // NOTE: this monkey-patch allow to hide correctly the mod
    await setModal(false);
  };

  function delateFavorite(name) {
    const deleteCharacter = {
      name: name,
    };

    const action = {
      type: "DELETE",
      payload: deleteCharacter,
    };

    dispatch(action);
  }

  const listCharacteres = () => {
    if (favorites.length === 0) {
      Swal.fire("No existen personajes en lista de favoritos");
    }
  };

  return (
    <>
      <nav className="menu smth">
        <ul className="flex-menu smth">
          <li>
            {" "}
            <button onClick={listCharacteres} className="btn-favorite smth">
              {" "}
              FAVORITOS{" "}
              <span>
                <img src={Rectangule1} alt="" />
              </span>
            </button>
            <ul>
              {favorites.map((character) => (
                <li key={uniqid()}>
                  <div className="box_favorites_row smth">
                    <img src={character.img} alt="img personaje" />
                    <p>{character.name}</p>
                    <img
                      onClick={() => {
                        delateFavorite(character.name);
                      }}
                      src={trash}
                      alt="img trash"
                    />
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="btn-add button smth"
              onClick={openModal}
            >
              AGREGAR
              <span>
                <img src={addCharacter} alt="" />{" "}
              </span>
              {modalIsOpen && (
                <ModalAddCharacter
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
