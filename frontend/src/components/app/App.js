import './App.css';
import DemoForm from '../demoForm/DemoForm'
import DemoRender from '../demoRender/demoRender';
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/form'  element={<DemoForm  navigate={ useNavigate() }/>}/>
          <Route path='/render'  element={<DemoRender  navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
