import logo from './logo.svg';
import './App.css';

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="194" nama="Pandu" />
      <Kartu nim="1723" nama="Dwi" />
      <Kartu nim="006" nama="Laksono" />
    </div>
  );
}

export default App;
