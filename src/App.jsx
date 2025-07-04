import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';
import Nav from './components/nav';
import HomeSlider from './pages/HomeSlider';
import Home from './pages/Home';
// import BrowseGames from './pages/BrowseGames';
// import Categories from './pages/Categories';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
         <Route path ="/" element={<HomeSlider/>}/>
         <Route path ="/home" element={<Home/>}/>
         {/* <Route path ="/" element={<BrowseGames/>}/> */}
         {/* <Route path="/" element={<Categories/>} /> */}
         
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
