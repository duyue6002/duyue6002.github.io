import React from "react";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import Repos from "./components/Repos";
import Footer from './components/Footer';
import "./App.less";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Profile />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
