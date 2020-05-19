import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { authAxios } from "../utils/authAxios";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  const getColors = () => {
    authAxios().get(`/api/colors`)
       .then(response => {
         console.log(response)
         setColorList(response.data)
  
       })
       .catch(error => {
         console.log("There has been an error",error)
       })

  };

  useEffect( () => {
    getColors();
  }, []);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
