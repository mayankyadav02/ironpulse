import "../../css/dashboard.css"

export default function TrainerDashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>IronPulse</h2>
        <a>My Members</a>
        <a>Assign Workout</a>
        <a>Attendance</a>
        <a>Messages</a>
        <a className="logout">Logout</a>
      </div>

      <div className="main">
        <h1>Trainer Panel</h1>

        <div className="stats">
          <div className="card">Members: 18</div>
          <div className="card">Today Sessions: 6</div>
          <div className="card">Pending Reviews: 3</div>
        </div>

        <div className="big-card">
          <h3>Today's Clients</h3>
          <p>Rahul – Chest</p>
          <p>Neha – Cardio</p>
          <p>Amit – Back</p>
        </div>

      </div>

    </div>
  )
}
