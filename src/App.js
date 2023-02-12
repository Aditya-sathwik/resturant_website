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

  const[loading,setLoading] = useState(false);
  const Override = css`
   display:block;
   border-color:red;
   margin: auto;
 ` ;

  useEffect(()=> {  
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },5000);
  },[])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading ={loading} css={Override} size={40}/>
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
