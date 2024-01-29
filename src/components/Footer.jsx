import React from 'react';
import logo from './../img/ispsc_logo.png';

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col-4">
            <div className="footer-logo">
            
              <img src={logo} className="footer-logo-image" alt="ISPSC Logo" />
              <p>Ilocos Sur Polytechnic State College</p>
              <p>Tagudin Campus</p>
            </div>
          </div>

          <div className="col-4">
            <div className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>Email: registrarispsc@yahoo.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: Quirino, Tagudin, Ilocos Sur</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2024 Ilocos Sur Polytechnic State College
        </div>
      </div>
    </div>
  );
}

export default Footer;
