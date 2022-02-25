// source: https://redux.js.org/usage/writing-tests#example-1
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "../store/store";

function render(
  ui,
  {
    preloadedState,
    store = createStore(rootReducer, preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render method
export { render };
