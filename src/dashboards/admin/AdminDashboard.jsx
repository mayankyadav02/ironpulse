import "../../css/dashboard.css"

export default function AdminDashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>IronPulse</h2>
        <a>Dashboard</a>
        <a>Members</a>
        <a>Trainers</a>
        <a>Plans</a>
        <a>Payments</a>
        <a>Reports</a>
        <a className="logout">Logout</a>
      </div>

      <div className="main">
        <h1>Admin Dashboard</h1>

        <div className="stats">
          <div className="card">Total Members: 245</div>
          <div className="card">Monthly Revenue: ₹3,40,000</div>
          <div className="card">Active Trainers: 12</div>
        </div>

        <div className="big-card">
          <h3>Recent Payments</h3>
          <p>Rahul – ₹2499</p>
          <p>Neha – ₹4999</p>
          <p>Amit – ₹999</p>
        </div>
      </div>

    </div>
  )
}
