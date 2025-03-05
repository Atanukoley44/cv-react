import './App.css'

function App() {
  return (

    <div className="all">
      <header>
        <nav className="navbar">
          <div className="logo"><a href="#"></a></div>
          <ul className="links">
            <li><i class="fa-solid fa-house"></i><a href="#">Home</a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="#">About</a></li>
            <li><i class="fa-solid fa-truck"></i><a href="#">Services</a></li>
            <li><i class="fa-solid fa-user"></i><a href="#">Contact</a></li>
          </ul>
          <button className="login-btn">LOG IN</button>
        </nav>
      </header>
<div className="page">
      <div className="form-popup">
        <span className='close-btn material-symbols-rounded'>close</span>
        <div className="form-box login">
          <div className="form-details">
            <h2>Welcome Back</h2>
            <p><b>Please log in using your personal information to stay connected with us.</b></p>
          </div>
          <div className="form-content">
            <h2>LOGIN</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Password</label>
              </div>
              <a href="#" className="forgot-pass">Forgot Password</a>
              <button type="submit">Log In</button>
            </form>
            <div className="bottom-link">
              Don't have an account?
              <a href="#" id="signup-link">Signup</a>
            </div>
          </div>
        </div>
        <div className="form-box signup">
          <div className="form-details">
            <h2>Create Account</h2>
            <p>To become a part of our community, please sing up using your personal information.</p>
          </div>
          <div className="form-content">
            <h2>SIGNUP</h2>
            <form action="#">
              <div className="input-field">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Create Password</label>
              </div>
              <div className="policy-text">
                <input type="checkbox" id='policy' />
                <label For="policy">
                  I agree the
                  <a href="#">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit">sign Up</button>
            </form>
            <div className="bottom-link">
             Alread have an account?
              <a href="# " id="login-link">Login</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
  

}

export default App
