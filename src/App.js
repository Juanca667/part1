import { useState } from "react";
import './App.css';


const GIFS = ['https://media3.giphy.com/media/XDVvCsEO3wsI8A9lvh/giphy.gif','https://media0.giphy.com/media/UigJDgSjqFiYRrnp0p/giphy.gif?cid=ecf05e47ncby4i4zdgi9b8817vg9pek3b4tlhxv8zr0363id&rid=giphy.gif&ct=g']

const DIFFERENT_GIFS = ['https://media4.giphy.com/media/bBznIB8etdfdtmwKPC/giphy.gif?cid=ecf05e47zt6swelozxvjf4hptyobq192djrr8qv82efa631r&rid=giphy.gif&ct=g']
function App() {
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
    <section className="App-content">
    {
      gifs.map(singleGif => <img src={singleGif} />)    
    }   
    <button onClick= {()=> setGifs(DIFFERENT_GIFS)}>cambiar gifs
    </button>       
    </section>
    </div>
  );
}

export default App;
