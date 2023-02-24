import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/car_details/carDetails.css";
import Details from "./details";


export default function CarDetails() {
  const baseURL="http://localhost:5000/newcars";
  const id="63f807c86aa86167f3628ef0"
  const [imgs, setimgs] = useState([])
  const [car, setcar] = useState({})
  const [wordData, setWordData] = useState("");
  const handleClick = (index) => {
    setWordData(imgs[index]);
  };

  useEffect(()=>{
    axios.get(`${baseURL}/${id}`)
    .then((res)=>{
      setcar(res.data);
     
      setimgs(res.data.image);
      
    })
  },[])


useEffect(()=>{
  setWordData(imgs[0])
  console.log(car);
},[imgs])
  return (
    <div className="container">
      <div className="row">
        <div className="main col-6">
          <img src= {`http://localhost:5000/${wordData}`} className="p" />
          <div className="flex_row">
            {imgs.map((data, i) => 
            { 
              return <div className="thumbnail" key={i}>
                <img
                 // className={wordData.id == i ? "clicked" : ""}
                 id="po"
                 
                 src={`http://localhost:5000/${data}`}
                  onClick={() => handleClick(i)}
                  />
              </div>
            }
            )}
          </div>
        </div>
        <div className="col-6">
          <Details car={car}> </Details>
        </div>
      </div>
    </div>
  );
}
