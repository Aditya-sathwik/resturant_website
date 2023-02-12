import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from'./components/Navbar';
import Header from'./components/Header';
import Products from'./components/Products';
import About from'./components/About';
import Contact from'./components/Contact';
import {css} from "@emotion/react";
import  PropagateLoader  from 'react-spinners/PropagateLoader';

function App() {

  const[loading,setloading] = useState(false);
  const override= css`
  display:block;
   border-color:red;
   margin-bottom: 20% ;
   padding-top : 200px;
  `;

  useEffect(()=> {  
    setloading(true)
    setTimeout(()=> {
      setloading(false)
    },5000);
  },[])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading ={loading} css={override} size={40}/>
        :
        <>

        <Navbar/>
        <Header/>
        <Products/>
         <About/>
         <Contact/>
        </>
      }
    </div>
  );
}

export default App;
