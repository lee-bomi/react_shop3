import './App.scss';
import Nav from './components/Nav';
import Jumbotron from "./components/Jumbotron";
import Items from "./Items";
import Data from "./data";
import {useState} from "react";

function App() {

  return (
      <div>
        <Nav></Nav>
        <Jumbotron></Jumbotron>
          <Items></Items>
      </div>
  );
}



export default App;
