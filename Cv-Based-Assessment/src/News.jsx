import React from "react"
function News(){
return(
  <div>
 <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="text-content">
          <h1 className="heading">Want tips & tricks to optimize your flow?</h1>
          <p className="subtext">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="form-container">
          <div className="form">
            <input
              className="email-input"
              type="email"
              placeholder="Enter Email"
            />
            <button className="notify-button">Notify Me</button>
          </div>
          <p className="privacy-text">
            We care about the protection of your data. Read our
            <span className="privacy-policy"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)
}

export default News;