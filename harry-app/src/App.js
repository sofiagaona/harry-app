import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";
import { Menu } from "./components/Menu";
import title from "./assets/Harry_Potter_wordmark1.png";
import { Filter } from "./components/Filter";

import { store, persistor } from "./store/store";

const App = () => {
  return (
    <div>
      <div className="title">
        <img src={title} alt="titulo Harry Potter" />
        <h2>Selecciona tu filtro</h2>
      </div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Menu />
          <Filter />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
