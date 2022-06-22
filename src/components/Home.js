import React from "react";
import { name, city } from "../data/data.js";

function Home() {

  return <div id="home">
    <h1 style={{color:"firebrick"}}> {name} is  a Web Developer from {city}</h1>
    <p>Lorem ipsum dolor sit amet.</p>

  </div>;
}

export default Home;
