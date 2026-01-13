import "../../css/dashboard.css"

export default function MemberDashboard() {
  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <h2>IronPulse</h2>
        <a>Dashboard</a>
        <a>My Plan</a>
        <a>Workout</a>
        <a>Diet</a>
        <a>Payments</a>
        <a>Profile</a>
        <a className="logout">Logout</a>
      </div>

      <div className="main">
        <h1>Welcome, Rahul 💪</h1>

        <div className="stats">
          <div className="card">Active Plan: Pro</div>
          <div className="card">Expiry: 25 Feb 2026</div>
          <div className="card">Workouts Done: 32</div>
        </div>

        <div className="big-card">
          <h3>Today's Workout</h3>
          <p>Chest + Triceps</p>
        </div>

      </div>

    </div>
  )
}
