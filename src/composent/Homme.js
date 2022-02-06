import React from 'react';
import "../App.css"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import achat from '../achat.png';
import "./homme.css";
import shop from "../ShoppingBag.svg";
import httpClient from 'react-http-client';

function Homme({}) {
  const el = useRef(null);
  const MaData = null ;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["IKEA MONSTER","宜家巨无霸","IKEA SZÖRNY","イケアモンスター","МОНСТР ИКЕА","وحش ايكيا"],
      // Speed settings, try diffrent values untill you get good results
      
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
      
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  
  const httpHandler = require('react-http-client');
  const getResponse = httpHandler.get(
    'http://localhost:8000/api/product'
  );
  getResponse.then(data => {
    localStorage.setItem('homme',JSON.stringify(data.data));
  })

  console.log(MaData);

  const article = JSON.parse(localStorage.getItem("homme"));
 
    return (
      <div>
        <div className='voirpanier'><a href="/panier"><img src={shop} alt=""  className='shop'/></a></div>
        <div className="parallax"> <h1 className="typing"> <span ref={el}></span></h1></div>
        {article.map((p) =>
        <div className='containerAchat' key={p.id}> 
          <div className='article'>
            <img src={p.img} alt=""  />
            <div className="wrapper" >
              <div className='one'> 
                <h5>{p.name}</h5>
              </div> 
              <div className='two'>
               <a href={"/article/"+p.id}> <button>Voir les détail</button></a>
              </div> 
            </div>
          </div>
        </div>  
        )}     
      </div>
    );
}

export default Homme;