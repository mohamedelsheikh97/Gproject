import React, { useState } from "react";
import "../../css/car_details/carDetails.css";
import Details from "./details";


export default function CarDetails() {
  const imgs = [
    { id: 0, value: "https://c4.wallpaperflare.com/wallpaper/392/133/116/car-bmw-bmw-m4-wallpaper-preview.jpg" },
    { id: 1, value: "https://c4.wallpaperflare.com/wallpaper/412/867/691/car-bmw-bmw-i8-cyan-wallpaper-preview.jpg" },
    {
      id: 2,
      value:
        "https://c4.wallpaperflare.com/wallpaper/78/498/401/bmw-m3-car-bmw-e30-wallpaper-preview.jpg",
    },
    {
      id: 3,
      value:
        "https://c4.wallpaperflare.com/wallpaper/643/74/422/nissan-turbo-white-drift-wallpaper-preview.jpg",
    },
    {
      id: 4,
      value:
        "https://c4.wallpaperflare.com/wallpaper/839/17/210/nissan-skyline-gt-r-r34-nissan-gtr-r34-nissan-skyline-gt-r-r34-nismo-nissan-wallpaper-preview.jpg",
    },
    {
      id: 5,
      value:
        "https://c4.wallpaperflare.com/wallpaper/299/200/8/car-nissan-nissan-gt-r-nissan-gtr-wallpaper-preview.jpg",
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
