import React, { useState } from "react";
import "../../css/car_details/carDetails.css";
import Details from "./details";


export default function CarDetails() {
  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/1602665.jpg" },
    { id: 1, value: "https://wallpaperaccess.com/full/1602661.jpg" },
    {
      id: 2,
      value:
        "https://wallpaperaccess.com/full/1602667.jpg",
    },
    {
      id: 3,
      value:
        "https://wallpaperaccess.com/full/1602658.jpg",
    },
    {
      id: 4,
      value:
        "https://images.pexels.com/photos/105296/pexels-photo-105296.jpeg",
    },
    {
      id: 5,
      value:
        "https://images.pexels.com/photos/14825003/pexels-photo-14825003.jpeg",
    },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  return (
    <div className="container">
    {/* <body>
    {imgs.map((data, i)=>(
          <div className="thumbnail" key={i}>
            <img
              className={wordData.id == i ? "clicked" : ""}
              id="po"
              src={data.value}
              onClick={() => handleClick(i)}
            />
          </div> )) }
    </body> */}
      <div className="row">
 
    <div className="main col-12">
      
      <img src={wordData.value} className="p" />
      <div className="flex_row">
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={wordData.id == i ? "clicked" : ""}
              id="po"
              src={data.value}
              onClick={() => handleClick(i)}
            />
          </div>
          
        ))}
      </div>
    </div>
    <div className="col-12"> <Details>  </Details></div>
    </div>
    </div>
    
  );
}
