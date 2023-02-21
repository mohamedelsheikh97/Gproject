import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer class="section bg-footer mt-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="">
              <h5 class="footer-heading text-uppercase text-white">
                Information
              </h5>
              <ul class="list-unstyled footer-link mt-4">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="">
              <h5 class="footer-heading text-uppercase text-white">
                Resources
              </h5>
              <ul class="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Maintainance </a>
                </li>
                <li>
                  <a href="">Driving School</a>
                </li>
                <li>
                  <a href="">Term &amp; Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="">
              <h5 class="footer-heading text-uppercase text-white">Help</h5>
              <ul class="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="">
              <h5 class="footer-heading text-uppercase text-white">
                Contact Us
              </h5>
              <p class="contact-info mt-4">Contact Us If You Need Any Help</p>
              <p class="contact-info">+20/1010591158</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-3">
        <p class="footer-alt mb-0 f-14">
          2023 © Klaks Store, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
