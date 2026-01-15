import Navbar from "../components/Navbar"
import "../css/auth.css"
import logo from "../../public/images/logo.png"

export default function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">

          <img src={logo} className="auth-logo" />
          <h2>Join IronPulse</h2>
          <p className="auth-tagline">Start Your Transformation Today</p>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Create Account</button>

          <p>Already a member? <a href="/login">Login</a></p>
        </div>
      </div>
    </>
  )
}
