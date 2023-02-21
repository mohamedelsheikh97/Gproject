import React, { useEffect, useState } from "react";
import "../../css/newCard.css";
import axios from "axios";

export function Cards() {
  let baseURL = "http://localhost:5000/newcars";
  let [cars, setcars] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setcars(response.data);
        console.log(response.data);
        console.log(response.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="car__item">
      <div class="car__img">
        <img src="" alt="" class="w-100" />
      </div>
      <div class="car__item-content mt-4">
        <h4 class="section__title text-center">Toyota Aventador</h4>
        <h6 class="rent__price text-center mt-">
          $50.00 <span>/ Day</span>
        </h6>
        <div class="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
          <span class="d-flex align-items-center gap-1">
            <i class="ri-car-line"></i> Model-2022
          </span>
          <span class="d-flex align-items-center gap-1">
            <i class="ri-settings-2-line"></i> Automatic
          </span>
          <span class="d-flex align-items-center gap-1">
            <i class="ri-timer-flash-line"></i> 20kmpl
          </span>
        </div>
        <button class="w-50 car_item-btn car_btn-rent">
          <a href="/cars/Toyota Aventador">Buy</a>
        </button>
        <button class="w-50 car_item-btn car_btn-details">
          <a href="/cars/Toyota Aventador">Details</a>
        </button>
      </div>
    </div>
    // <div className='featured container mt-5'>
    //   <h5> Featured cars</h5>
    //   {
    //     cars.map((card)=>{
    //       return (
    //         <Card style={{ width: '18rem' }} className='cardItem p-2 mt-4'>
    //   <Card.Img variant="top" src={`http://localhost:5000/${card.image}`} />
    //   <Card.Body>
    //     <Card.Title>{`${card.name} ${card.model}`}</Card.Title>
    //     <div className='provider d-flex align-items-center'>
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFN-bYFnN7-K2SEmIdjYmDpNmN9Ulxz5H_g&usqp=CAU" alt="" />
    //         <div className='m-2'>
    //           <p className='m-0'>elkersh motors</p>
    //           <span>seller</span>
    //         </div>
    //     </div>
    //     <div className=' d-flex align-items-center justify-content-between'>
    //         <p className='m-0'>${card.price}</p>
    //         <button className="button-5">Details</button>
    //     </div>
    // </Card.Body>
    // </Card>
    //       )
    //     })
    //   }

    // </div>
  );
}
