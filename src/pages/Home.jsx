import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../css/home.css"
import Plans from "./Plans"
import Trainers from "./Trainers"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background Video */}
      <video autoPlay muted loop className="bg-video">
        <source src="/public/videos/workout.mp4" type="video/mp4" />
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
              <Plans/>
  {/* <div className="plans-container">
    <div className="plan-card">Starter – ₹999</div>
    <div className="plan-card popular">Pro – ₹2499</div>
    <div className="plan-card">Elite – ₹4999</div>
  </div> */}
</div>


          
<div className="why">
  <h2>Why Choose IronPulse?</h2>

  <div className="why-grid">

    <div className="why-card">
      <span className="why-icon">🏋️‍♂️</span>
      <h3>Certified Trainers</h3>
      <p>Highly qualified coaches with years of professional experience.</p>
    </div>

    <div className="why-card">
      <span className="why-icon">⚙️</span>
      <h3>Modern Equipment</h3>
      <p>Latest machines & tools designed for safe and effective workouts.</p>
    </div>

    <div className="why-card">
      <span className="why-icon">📋</span>
      <h3>Personalized Plans</h3>
      <p>Workout & diet plans customized for your fitness goals.</p>
    </div>

    <div className="why-card">
      <span className="why-icon">🕒</span>
      <h3>24×7 Support</h3>
      <p>Anytime guidance, motivation & progress tracking support.</p>
    </div>

  </div>
</div>
          
<div className="gallery">
  <h2>Real Transformations</h2>

  <div className="gallery-grid">
    <div className="gallery-item">
      <img src="/public/images/trans1.jpg" />
      <span>12 Weeks</span>
    </div>

    <div className="gallery-item">
      <img src="/public/images/trans2.jpg" />
      <span>8 Weeks</span>
    </div>

    <div className="gallery-item">
      <img src="/public/images/trans3.jpg" />
      <span>16 Weeks</span>
    </div>

    <div className="gallery-item">
      <img src="/public/images/trans4.jpg" />
      <span>10 Weeks</span>
    </div>
  </div>
</div>
      
      <Trainers />
      
      {/* CONTACT & LOCATION */}
<div className="contact-section">

  <h2>Contact IronPulse</h2>

  <div className="contact-wrapper">

    {/* CONTACT INFO */}
    <div className="contact-info">
      <h3>Get In Touch</h3>

      <p><span>📍</span> Vaishali Nagar, Jaipur, Rajasthan</p>
      <p><span>📞</span> +91 98765 43210</p>
      <p><span>📧</span> ironpulsegym@gmail.com</p>

      <div className="contact-socials">
        <a>Instagram</a>
        <a>Facebook</a>
        <a>YouTube</a>
      </div>
    </div>

    {/* CONTACT FORM */}
    <div className="contact-form">
      <h3>Send Message</h3>

      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>

      <button>Send Message</button>
    </div>

  </div>

  {/* MAP */}
  <div className="map-box">
    <iframe
      src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
      loading="lazy"
    ></iframe>
  </div>

</div>


          <Footer />

    </>
  )
}
