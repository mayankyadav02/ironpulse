import Navbar from "../components/Navbar"
import "../css/auth.css"
import logo from "../../public/images/logo.png"

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">

          <img src={logo} className="auth-logo" />
          <h2>Login to IronPulse</h2>
          <p className="auth-tagline">Build Your Strongest Self</p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>

          <p>Don't have an account? <a href="/register">Join Now</a></p>
        </div>
      </div>
    </>
  )
}
