import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import DATA_MOCK from "../../db.json";

import { ModalAddCharacter } from "./ModalAddCharacter";

// NOTA mejorar funcionalidad del mock
jest.mock("../utils/getBase64/getBase64", () => ({
  getBase64: jest.fn(() => "mock-base64-data"),
}));

describe("AddCharacter", () => {
  const axiosMock = new MockAdapter(axios);
  const [harryPotter] = DATA_MOCK.characteres;
  let FncloseModal;
  let imageFile;

  beforeEach(() => {
    FncloseModal = jest.fn();
    //imageFile = new File(["(⌐□_□)"], "harryPoter.png", { type: "image/png" });
  });

  it("should calls closeModal on X click", () => {
    render(<ModalAddCharacter modalIsOpen closeModal={FncloseModal} />);

    userEvent.click(screen.getByRole("button", { name: /X/i }));

    expect(FncloseModal).toHaveBeenCalled();
  });

  describe("onSubmit", () => {
    const fillInputs = () => {
      userEvent.type(
        screen.getByRole("textbox", { name: /nombre:/i }),
        harryPotter.name
      );
      userEvent.type(
        screen.getByRole("textbox", { name: /cumpleaños:/i }),
        harryPotter.dateOfBirth
      );
      userEvent.type(
        screen.getByRole("textbox", { name: /color de ojos:/i }),
        harryPotter.eyeColour
      );
      userEvent.type(
        screen.getByRole("textbox", { name: /color de pelo:/i }),
        harryPotter.hairColour
      );
      userEvent.click(screen.getByRole("combobox", { name: /casa:/i }));
      userEvent.click(screen.getByRole("option", { name: /Hogwarts/i }));
      userEvent.click(screen.getByRole("combobox", { name: /vivo:/i }));
      userEvent.click(screen.getByRole("option", { name: /Si/i }));
      userEvent.click(screen.getByText(/hombre/i));
      userEvent.click(screen.getByText(/estudiante/i));

      // NOTE: adjust mock to avoid error tests
      // userEvent.upload(screen.getByTestId("upload-profile-image"), imageFile);

      userEvent.click(screen.getByRole("button", { name: /guardar/i }));
    };
    let postData;

    beforeEach(() => {
      axiosMock
        .onPost("https://apiharry.herokuapp.com/characteres")
        .reply((config) => {
          postData = JSON.parse(config.data);
          return new Promise((resolve) => resolve([200]));
        });
    });

    it("should sends valid data", async () => {
      render(<ModalAddCharacter modalIsOpen closeModal={FncloseModal} />);
      await fillInputs();
      expect(postData).toMatchObject({
        name: harryPotter.name,
        dateOfBirth: harryPotter.dateOfBirth,
        eyeColour: harryPotter.eyeColour,
        hairColour: harryPotter.hairColour,
        gender: "male",
        hogwartsStudent: "true",
        hogwartsStaff: "",
        image: "",
        house: "Hogwarts",
        alive: "true",
      });
    });

    it("should calls closeModal after submit", async () => {
      render(<ModalAddCharacter modalIsOpen closeModal={FncloseModal} />);
      await fillInputs();

      await waitFor(() => {
        expect(FncloseModal).toHaveBeenCalled();
      });
    });
  });
});
