import React from "react";
import "./App.css";
import MainHeader from './components/MainHeader';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className="App">
      <MainHeader/>
      <MainPage/>
    </div>
  );
};

export default App;
