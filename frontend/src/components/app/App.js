import './App.css';
import WeatherApp from '../weather/WeatherApp'
import React from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/' element={<WeatherApp navigate={useNavigate()} />} />
        </Routes>
    );
}

export default App;
