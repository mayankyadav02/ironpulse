import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../css/home.css"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background Video */}
      <video autoPlay muted loop className="bg-video">
        <source src="/src/assets/videos/workout.mp4" type="video/mp4" />
      </video>

      {/* Hero Section */}
      <div className="hero">
        <h1>IRONPULSE</h1>
        <p>Build your strongest self</p>
        <div>
          <button>Join Now</button>
          <button className="outline">Free Trial</button>
        </div>
          </div>



          <div className="home-plans">
  <h2>Membership Plans</h2>
  <div className="plans-container">
    <div className="plan-card">Starter – ₹999</div>
    <div className="plan-card popular">Pro – ₹2499</div>
    <div className="plan-card">Elite – ₹4999</div>
  </div>
</div>

          
          <div className="why">
  <h2>Why Choose IronPulse?</h2>
  <div className="why-grid">
    <div className="why-card">Certified Trainers</div>
    <div className="why-card">Modern Equipment</div>
    <div className="why-card">Personalized Plans</div>
    <div className="why-card">24x7 Support</div>
  </div>
          </div>
          
          <div className="gallery">
  <h2>Transformations</h2>
  <div className="gallery-grid">
    <img src="/src/assets/images/trans1.jpg" />
    <img src="/src/assets/images/trans2.jpg" />
    <img src="/src/assets/images/trans3.jpg" />
    <img src="/src/assets/images/trans4.jpg" />
  </div>
</div>

          <Footer />

    </>
  )
}
