import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

export default function Details() {
    
  return (
    <div>
      <article class="card car-details label-primary new">
        <div class="card-body">
          <div class="d-flex flex-md-row align-items-md-start align-items-center flex-column">
            <div class="w-100">
              <div class="d-flex flex-md-row flex-column">
                <h3 class="mr-3">Mercedes</h3>
                <div class="ml-auto text-right">
                  <h3>EG 1.500.000</h3>
                  <ul class="rating">
                    <li>
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div class="container-fluid fs-5">
                <div class="row">
                  <div class="col-md-4 col-12">
                    <ul>
                      <li>
                        <i  class="fas fa-users "></i> <strong>Model:</strong> AMG
                        G63
                      </li>
                      <br /> <br />
                      <li>
                        <i class="fas fa-calendar"></i> <strong>Transmission:</strong> Automatic  {" "}
                        
                      </li>
                      <br /> <br />
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Motor:</strong> 1,500
                      </li>
                      <br /> <br />
                    </ul>
                   
                    <i class="fas fa-location-arrow"></i>{" "}
                        <strong>Location:</strong>{" "}
                  </div>
                
                  <div class="col-md-8 col-12">
                    <ul>
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Color:</strong> Black
                      </li>
                      <br /> <br />
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Year:</strong> 2022{" "}
                      </li>
                      <br /> <br />
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Shop Name:</strong> ElKersh
                      </li>
                      <br /> <br />
                      <div class="google-map">
                       
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.358308407874!2d31.32809078488403!3d30.083922981868003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f39289fec69%3A0x94b8b87ed5aec655!2sEl%20Kersh%20Cars%20Official!5e0!3m2!1sar!2seg!4v1677005147165!5m2!1sar!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       </div>
                    </ul>
                  </div>

                  <div class="col-12">
                    <div class="d-flex flex-md-row flex-column align-items-center justify-content-end">
                      <button class="btn btn-warning w-100 mb-md-0 mb-3 mr-md-3 mr-0">
                        <i class="fas fa-phone-alt"></i> Call
                      </button>
                      <button class="btn btn-secondary w-100">
                        <i class="fas fa-star"></i> Add To Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

    </div>
  );
}
