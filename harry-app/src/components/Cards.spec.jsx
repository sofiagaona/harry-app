import Swal from "sweetalert2";
import DATA_MOCK from "../../db.json";
import { render, screen, userEvent } from "../config/test-utils";

import { Cards } from "./Cards";

describe("Cards", () => {
  const students = DATA_MOCK.characteres.filter(
    ({ hogwartsStudent }) => !!hogwartsStudent
  );

  describe("add favorite button", () => {
    let swalSpy;

    const clickLastAddFavoriteButton = () => {
      const favButtons = screen.queryAllByAltText(/add favorite/i);
      const lastIcon = favButtons[favButtons.length - 1];
      userEvent.click(lastIcon);
    };

    beforeEach(() => {
      swalSpy = jest.spyOn(Swal, "fire");
    });

    it("should throw modal when try to add more than 5 favorites", async () => {
      render(<Cards list={students} />, {
        preloadedState: {
          favorite: students.slice(0, 5),
        },
      });

      clickLastAddFavoriteButton();

      expect(swalSpy).toHaveBeenCalledWith({
        icon: "error",
        title: "Oops...",
        text: "No se permiten más de 5 personajes en la lista, o personajes duplicados, verifica tu lista!",
      });
    });

    it("should throw modal when try to add a duplicated favorite character", async () => {
      render(<Cards list={students} />, {
        preloadedState: {
          favorite: [students[0]],
        },
      });

      const [fistCharacter] = screen.queryAllByAltText(/add favorite/i);
      userEvent.click(fistCharacter);

      expect(swalSpy).toHaveBeenCalledWith({
        icon: "error",
        title: "Oops...",
        text: "No se permiten más de 5 personajes en la lista, o personajes duplicados, verifica tu lista!",
      });
    });

    it("should not throw modal when favorites are less than 5", async () => {
      render(<Cards list={students} />);

      clickLastAddFavoriteButton();

      expect(swalSpy).not.toHaveBeenCalled();
    });
  });
});
