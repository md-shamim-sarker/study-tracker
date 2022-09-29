import React from 'react';
import {useEffect} from 'react';
import './App.css';
import Main from './components/Main/Main';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='App'>
      <Main></Main>
    </div>
  );
};

export default App;