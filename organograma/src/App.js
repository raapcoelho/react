import Banner from './components/Banner';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite o seu nome" />
      <TextField label="Cargo" placeholder="Digite o seu nome" />
      <TextField label="Imagem" placeholder="Digite o seu nome" />
    </div>
  );
}

export default App;
