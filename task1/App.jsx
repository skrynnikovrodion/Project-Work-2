import React from 'react';
import './App.css'
import Header from './html/Header';
import Body from './html/Body';
import NewObj from './html/NewObj';


const App = () => {
  return (
    <form className="main">
      <div className="main__center">
        <Header />
        <Body />
        <NewObj />
      </div>
    </form>
  );
}

export default App;
