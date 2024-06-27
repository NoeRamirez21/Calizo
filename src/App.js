import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header'
import Body from './componentes/Body'
import Footer from './componentes/Footer'
import Galeriarecientes from './componentes/Galeriarecientes'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Galeriarecientes></Galeriarecientes>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
