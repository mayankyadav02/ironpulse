import { useState } from "react"
import { Link } from "react-router-dom"
import "../css/navbar.css"
import logo from "../../public/images/logo.png"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [dashOpen, setDashOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} />
      </div>

      <div className={`nav-right ${open ? "show" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/trainers">Trainers</Link>
              <Link to="/login">Login</Link>
                        <div
  className="dropdown"
  onMouseEnter={() => setDashOpen(true)}
  onMouseLeave={() => setDashOpen(false)}
>
  <span onClick={() => setDashOpen(!dashOpen)}>
    Dashboard ▾
  </span>

  <div className={`dropdown-menu ${dashOpen ? "open" : ""}`}>
    <Link to="/dashboard/admin">Admin</Link>
    <Link to="/dashboard/member">Member</Link>
    <Link to="/dashboard/trainer">Trainer</Link>
  </div>
</div>

        <Link to="/register" className="join-btn">Join</Link>
      </div>


      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </div>
  )
}
