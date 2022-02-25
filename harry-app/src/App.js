
import './App.scss';
import { Menu } from './components/Menu';
import title from './assets/Harry_Potter_wordmark1.png';
import { Filter } from './components/filter';
import { Provider } from 'react-redux';
import { store } from './store/store';



function App() {
  return (
    <div>
      <div className="title">
        <img src={title} alt="titulo Harry Potter"></img>
        <h2>Selecciona tu filtro</h2>
      </div>
      <Provider store={store}>
        <Menu/>
        <Filter/>
     </Provider>
     </div>
   
   
  )
}

export default App;
