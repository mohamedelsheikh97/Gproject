import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/car_details/carDetails.css";
import DetailsCard from "./detailsCard";
import { useParams } from "react-router-dom";

export default function Accdetails() {
  let baseURL = "http://localhost:5000/accessories";
  const { id } = useParams();
  const [accessory, setaccessory] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/${id}`)
      .then((res) => {
        setaccessory(res.data);
        console.log(res.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="main col-5 no">
          <img
            src={`http://localhost:5000/${accessory?.image}`}
            className="p"
          />
        </div>
        <div className="col-7">
          <DetailsCard accessory={accessory}> </DetailsCard>
        </div>
      </div>
         
    </div>
  );
}
