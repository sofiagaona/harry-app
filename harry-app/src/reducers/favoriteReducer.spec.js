import DATA_MOCK from "../../db.json";

import { favoriteReducer } from "./favoriteReducer";

describe("favoriteReducer", () => {
  it("should delete character using DELETE action passing the name", () => {
    const state = favoriteReducer(DATA_MOCK.characteres, {
      type: "DELETE",
      payload: {
        name: "Harry Potter",
      },
    });

    expect(state.length).toBe(DATA_MOCK.characteres.length - 1);
  });

  it("should add character using ADD action", () => {
    const [HarryPotter] = DATA_MOCK.characteres;
    
    const state = favoriteReducer([], {
      type: "ADD",
      payload: HarryPotter,
    });

    expect(state[0]).toEqual(HarryPotter);
  });
});
