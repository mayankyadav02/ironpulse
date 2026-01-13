import logo from "../assets/images/logo.png"
import "../css/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <img src={logo} />
          <h3>IronPulse</h3>
          <p>Build Your Strongest Self</p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Plans</a>
          <a href="#">Trainers</a>
          <a href="#">Login</a>
        </div>

        <div className="footer-social">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Youtube</span>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 IronPulse Fitness. All Rights Reserved.
      </div>
    </footer>
  )
}
