
import './App.scss';
import title from './assets/Harry_Potter_wordmark1.png';

function App() {

  return(
    <div className="title">
        <img src={title} alt="titulo Harry Potter"></img>
        <h2>Selecciona tu filtro</h2>
      </div>
  )
  
}

export default App;
