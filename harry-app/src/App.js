
import './App.scss';
import { Menu } from './components/Menu';
import title from './assets/Harry_Potter_wordmark1.png';
import { Filter } from './components/filter';

function App() {
  return (
    <>
      <Menu />
      <div className="title">
        <img src={title} alt="titulo Harry Potter"></img>
        <h2>Selecciona tu filtro</h2>
      </div>
     <Filter/>
   
    </>
  )
}

export default App;
