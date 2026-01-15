import Navbar from "../components/Navbar"
import "../css/trainers.css"
import t1 from "../assets/images/trainer1.jpg"
import t2 from "../assets/images/trainer2.jpg"
import t3 from "../assets/images/trainer3.jpg"

export default function Trainers() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="trainers-page">
        <h1>Meet Our Coaches</h1>

        <div className="trainer-grid">
          <div className="trainer-card">
            <img src={t1} />
            <h3>Rahul Verma</h3>
            <p>Strength & Conditioning</p>
          </div>

          <div className="trainer-card">
            <img src={t2} />
            <h3>Neha Singh</h3>
            <p>Fat Loss & Cardio</p>
          </div>

          <div className="trainer-card">
            <img src={t3} />
            <h3>Aman Yadav</h3>
            <p>Bodybuilding Coach</p>
          </div>
        </div>
      </div>
    </>
  )
}
