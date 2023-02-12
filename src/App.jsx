import './App.css';
import Articulo from './components/Articulo';
import Bitcoin from './components/Bitcoin';
//import logo from './logo.svg';
// import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bitcoin />
        <Articulo />
        {/*Componenete propio Greeting.jsx*/}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Idoia"></Greeting> */}
        {/* <GreetingF name="Idoia"></GreetingF> */}
      </header>
    </div>
  );
}

export default App;
