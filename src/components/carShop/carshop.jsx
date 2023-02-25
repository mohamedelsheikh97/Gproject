import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/car_shop/carshop.css";

export default function Carshop() {
  const baseURL="http://localhost:5000/carsshops";
  const carsURL="http://localhost:5000/newcars/";
  const id = "63f933d46e7b4a9331c31ab4";
  const [shop, setshop] = useState([])
  const [cars, setcars] = useState([])

  useEffect(()=>{
    axios.get(`${baseURL}/${id}`)
    .then((res)=>{
        setshop(res.data);
        console.log(res.data);})
      .catch(err=>{console.log(err);});
      console.log(shop);
  //   axios.get(`${carsURL}`)
  //   .then((res)=>{console.log(res.data);})
  //   .catch(err=>{console.log(err);})
  },[])
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
          <section class="ourWork" id="ourWork">
            {/* <h2>OUR Cars</h2> */}
            {/* <div class="loader">
  Our Cars
  
</div> */}
            <div class="hh">
              <div class="typewriter">Our Cars .....</div>
            </div>
            <hr class="black" />

            <div class="container ">
              <div class="row">
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/321424992_807532877012554_3481564339408091151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ME1YyJ8zGkIAX_n8qli&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCh1g23aEePoD8vYlTkQ3ytL785o35T8JqZy9VoVPXzRQ&oe=63FB4F06"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326793027_729863231898899_3970952357772941382_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=RoSaAjeM-C0AX8Gv6vb&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD4DQYj1zqhyuwZFDLPM7fUajRr6S3WlisVPN5j_TdUBw&oe=63FB8BE9"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326793027_729863231898899_3970952357772941382_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=RoSaAjeM-C0AX8Gv6vb&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD4DQYj1zqhyuwZFDLPM7fUajRr6S3WlisVPN5j_TdUBw&oe=63FB8BE9"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326032120_758501412366701_4769919662020092655_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=X-I7agTiBu8AX9RQm2n&_nc_ht=scontent.fcai19-6.fna&oh=00_AfA7ehKIxEMdqpJudOAwc6qK8dTP_fFI1h4ZXF1gQuYBag&oe=63FCAB6E"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/329217842_713880490461081_8206761551032935767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=NaaBc95EWz4AX93NeID&_nc_ht=scontent.fcai19-6.fna&oh=00_AfAWUyGg6XI-8p4HyZjo5dlfemYS2fbOxuDSITuFrZRLvg&oe=63FC5646"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/323139485_659244095911978_6512380118674075603_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ave2DzqzuI0AX9Z52df&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBc7yuj7s7FtudckM8cMljNii9fp9b9mL4kio9v8YJxkQ&oe=63FBE976"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/323139485_659244095911978_6512380118674075603_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ave2DzqzuI0AX9Z52df&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBc7yuj7s7FtudckM8cMljNii9fp9b9mL4kio9v8YJxkQ&oe=63FBE976"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/325776821_728243305623715_484930446275684348_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=hrkuPN-qTgcAX8jEb3K&_nc_ht=scontent.fcai19-6.fna&oh=00_AfAFFLctXdkJAtnY98RCHpYxcEs33Go_jBRRGONHN8Iu0g&oe=63FB945F"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/325776821_728243305623715_484930446275684348_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=hrkuPN-qTgcAX8jEb3K&_nc_ht=scontent.fcai19-6.fna&oh=00_AfAFFLctXdkJAtnY98RCHpYxcEs33Go_jBRRGONHN8Iu0g&oe=63FB945F"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div class="wrapper ">
                    <div class="card front-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326138003_572228168102195_1594439134533116712_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=KwLcZp9vr50AX_zJHc_&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD6nA0QKCuqiT9SoOaWZADCF3uq3YyU5H2YeRhkvblSlQ&oe=63FBD66E"
                        alt="Flip Card"
                      />
                    </div>
                    <div class="card back-face">
                      <img
                        src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/326138003_572228168102195_1594439134533116712_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=KwLcZp9vr50AX_zJHc_&_nc_ht=scontent.fcai19-6.fna&oh=00_AfD6nA0QKCuqiT9SoOaWZADCF3uq3YyU5H2YeRhkvblSlQ&oe=63FBD66E"
                        alt="Flip Card"
                      />
                      <div class="info">
                        <div class="title">BMW X8</div>
                        <h4> 2023 </h4> <br />
                        <br />
                      </div>
                      <button class="button accept-btn">More Details</button>
                      <br /> <br />
                      <ul>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
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
      </section>
    </div>
  );
}
