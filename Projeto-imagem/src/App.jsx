import './App.css';
import imagem1 from './assets/ralsei-armado-1.png';
import imagem2 from './assets/ralsei-armado-2.png';

function App() {
  return (
    <div className="moldura">
      <img 
        src={imagem1}
      />
      <img 
        src={imagem2}
      />
    </div>
  );
}

export default App;