import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

export default function Details(props) {
    const {car} =props;
    console.log(car);
    console.log(car.owner?.location);
  return (
    <div>
      <article class="card car-details label-primary new">
        <div class="card-body">
          <div class="d-flex flex-md-row align-items-md-start align-items-center flex-column">
            <div class="w-100">
              <div class="d-flex flex-md-row flex-column">
                <h3 class="mr-3">{car.name}</h3>
                <div class="ml-auto text-right">
                  <h3>{car.price}</h3>
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
                  <div class="col-md-6 col-12">
                    <ul>
                      <li>
                        <i  class="fas fa-users "></i> <strong>Model:</strong> {car.model}
                      </li>
                      <br /> 
                      <li>
                        <i class="fas fa-calendar"></i> <strong>Transmission:</strong> {car.transmission}  {" "}
                        
                      </li>
                      <br /> 
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Motor:</strong> 1,500
                      </li>
                      <br /> <br />
                    </ul>
                   
                  </div>
                
                  <div class="col-md-6 col-12">
                    <ul>
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Color:</strong> {car.color}
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Year:</strong> {car.year}
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-info-circle"></i>{" "}
                        <strong>Shop Name:</strong>{car.owner?.name}
                      </li>
                      <br /> <br />
                      <div class="google-map">
                    
                       </div>
                    </ul>
                  </div>

                  <div className='col-12'>
                    <div className="row ">
                    <div class=" ">
                      <button class=" col-6 btn btn-warning ">
                        <i class="fas fa-phone-alt"></i> Call
                      </button>
                     
                      <a className='col-6' href={car.owner?.location} target={'_blank'}>
                         <button class="btn btn-secondary w-100 col-5 ">
                            <i class="fas fa-location-arrow"></i>{" "}
                             <strong>Location:</strong>{" "}
                      </button>
                      </a>
                    </div>
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
