import logo from './logo.svg';
import './App.css';

function Avatar (props) {
  return (
    <img width="77px" className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Komentar (props) {
  return (
    <div className="Komentar">
      <UserInfo user={props.author} />
      <div className="Komentar-text">
        {props.text}
      </div>
      <div className="Komentar-date">
        {props.date}
      </div>
    </div>
  );
}

function App() {
  let me = {name:"Pandu Dwi Laksono", avatarUrl:logo}
  return (
    <div>
      <Komentar text="Hola dan 1941723006" date="1 Maret 2021" author={me} />
    </div>
  );
}

export default App;
