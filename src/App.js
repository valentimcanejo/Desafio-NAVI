import React from 'react'
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Objetivos from "./components/Objetivos"
import Evento from "./components/Evento"
import Info from "./components/Info"
import Inscricoes from "./components/Inscricoes"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
            <Navbar />
            <Main />
            <Objetivos />
            <Evento />
            <Info />
            <Inscricoes />
      </Route>
      <Route exact path="/auth">
        <Login />
      </Route>
    </Switch>
    </BrowserRouter>  
            
          
    </>

  );
}

export default App;
