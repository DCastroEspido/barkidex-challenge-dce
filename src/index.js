import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from './components/layout/Navbar'
import PokemonDetail from './routes/PokemonDetail';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>

    <div className='layout'>
      <div className='main-header'>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pokemon" element={<PokemonDetail />}>
          <Route path=":name" element={<PokemonDetail />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      <div className='main-footer'>
        <p>Barkidex developed by DCastroEspido</p>
      </div>
    </div>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
