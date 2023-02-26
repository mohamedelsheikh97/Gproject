import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/car_shop/carshop.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Carshop() {
  let {id} = useParams();
  let baseUrl = "http://localhost:5000/carsshops";
  let baseUrl1 = "http://localhost:5000/newcars";
  let [shop,setshop] = useState([]);
  let [cars,setcars] = useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl}/${id}`).then((response)=>{
      setshop(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  
  useEffect(() => {
    axios
      .get(baseUrl1)
      .then((response) => {
        setcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(cars);
  let filteredCars = cars.filter((car)=> car.owner._id == id)
  console.log(filteredCars);
  return (
    <div className="kk">
      <section>
        <div class="container-fluid intro">
          <img src={`http://localhost:5000/${shop.image}`} id="c-wrench" />
          <ul>
            <li className="big">
              <a
                href="https://www.facebook.com/elkershcars.eg/"
                target={"_blank"}
              >
                <i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/elkershcars.official/"
                target={"_blank"}
              >
                <i class="fab fa-instagram-square fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/El+Kersh+Cars+Official/data=!4m7!3m6!1s0x14583f39289fec69:0x94b8b87ed5aec655!8m2!3d30.083923!4d31.3259021!16s%2Fg%2F1tcttvfd!19sChIJaeyfKDk_WBQRVcau1X64uJQ?authuser=0&hl=ar&rclk=1"
                target={"_blank"}
              >
                <i class="fas fa-thumbtack fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
            <div class="hh">
              <div class="typewriter">Our Cars .....</div>
            </div>
            <hr class="black" />

            <div class="container ">
                <div className="row ">
          {filteredCars.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item1 mb-4">
                  <img
                    class="img-fluid mb-4"
                    src={`http://localhost:5000/${card.image}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-4">{`${card.name} ${card.model}`}</h4>
                  <div class="d-flex justify-content-center mb-4">
                    <div class="card-price px-2">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span class="font-weight-bold">${card.price}</span>
                    </div>
                  </div>
                  <div className="m-2">
                    <p className="card-name m-0 font-weight-bold">
                      {card.owner?.name}
                    </p>
                    <NavLink className="nav-link" to="/carshop">
                      <img
                        src={`http://localhost:5000/${card.owner?.image}`}
                        alt=""
                        width="50px"
                        class="owner-img"
                      />
                    </NavLink>
                  </div>
                  <a class="btn btn-warning px-3 font-weight-bold" href="">
                    CAR DETAILS
                  </a>
                </div>
              </div>
            );
          })}
        </div>
                
                
                
               
                

                {/* 
    <div class="wrapper col-4">
      <div class="card front-face">
        <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06" alt="Flip Card"/>
      </div>
      <div class="card back-face">
        <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06" alt="Flip Card"/>
        <div class="info">
          <div class="title">BMW</div>
          <p>2023  <br/>X8</p>
        </div>
        <ul>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </ul>
      </div>
    </div>
    <div class="wrapper col-4">
      <div class="card front-face">
        <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06" alt="Flip Card"/>
      </div>
      <div class="card back-face">
        <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06" alt="Flip Card"/>
        <div class="info">
          <div class="title">BMW</div>
          <p>2023  <br/>X8</p>
        </div>
        <ul>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </ul>
      </div>
    </div> */}
              </div>
            </div>
          </section>
        </div>
  );
}
