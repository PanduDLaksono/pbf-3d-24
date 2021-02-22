import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NIM : 1941723006
        </p>
        <p>
          Nama : Pandu Dwi Laksono
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Belajar React
        </a>
      </header>
    </div>
  );
}

export default App;
