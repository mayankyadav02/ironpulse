import Navbar from "../components/Navbar"
import "../css/plans.css"

export default function Plans() {
  return (
    <>
      <Navbar />

      <div className="plans-page">
        <h1>Choose Your Power</h1>
        <div className="plans-container">

          <div className="plan-card">
            <h2>Starter</h2>
            <p className="price">₹999 / month</p>
            <ul>
              <li>Gym Access</li>
              <li>Cardio Zone</li>
              <li>Locker</li>
            </ul>
            <button>Select</button>
          </div>

          <div className="plan-card popular">
            <h2>Pro</h2>
            <p className="price">₹2499 / month</p>
            <ul>
              <li>All Access</li>
              <li>Personal Trainer</li>
              <li>Diet Plan</li>
            </ul>
            <button>Select</button>
          </div>

          <div className="plan-card">
            <h2>Elite</h2>
            <p className="price">₹4999 / month</p>
            <ul>
              <li>Unlimited Access</li>
              <li>VIP Trainer</li>
              <li>Supplements</li>
            </ul>
            <button>Select</button>
          </div>

        </div>
      </div>
    </>
  )
}
