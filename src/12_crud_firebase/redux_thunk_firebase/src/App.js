import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import Header from "./components/Header";
import Root from "./Root";
import './App.css';

export const AuthContext = React.createContext(null);
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Root />
      </Router>
    </Provider>
  );
}

export default App;
