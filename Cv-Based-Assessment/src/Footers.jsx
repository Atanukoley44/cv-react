import React from 'react';
function Footers(){

  return(
    <div>

<div className="footer-container">
      <div>
        <h1 className="footer-title">NEXT.JS</h1>
        <p className="footer-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste
          repellat consequatur libero reiciendis, blanditiis accusantium.
        </p>
        <div className="social-icons">
    <i class="fa-brands fa-facebook " style={{backgroundColor:"blue"}}></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-whatsapp" style={{backgroundColor:"rgb(40, 227, 11)"}}></i>
    <i class="fa-brands fa-graduation-cap" style={{backgroundColor:"rgb(227, 177, 11)"}}></i>
    <i class="fa-brands fa-linkedin" style={{backgroundColor:"rgb(36, 11, 227)"}}></i>
    </div>
      </div>
      <div className="footer-links">
        <div>
          <h6 className="link-heading">Solutions</h6>
          <ul>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="link-heading">Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="link-heading">Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="link-heading">Legal</h6>
          <ul>
            <li>Claim</li>
            <li>Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Footers;