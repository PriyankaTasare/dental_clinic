import '../styles/main.css'; // 

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Smile Dental Clinic</h1>
        <p>Your trusted destination for expert dental care</p>
      </section>

      <section className="intro-section">
        <h2>About Us</h2>
        <p>
          At Smile Dental Clinic, we believe in making your dental experience as
          stress-free and comfortable as possible. With state-of-the-art
          equipment and a friendly team, we aim to provide the best dental care
          in town.
        </p>
      </section>

     
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>🦷 Teeth Cleaning & Polishing</li>
          <li>📸 Digital X-rays</li>
          <li>🦷 Tooth Extraction</li>
          <li>😁 Smile Makeovers</li>
          <li>🪥 Root Canal Therapy</li>
        </ul>
      </section>

    
      <section className="cta-section">
        <h3>Book your appointment today!</h3>
        <button className="book-btn">Book Appointment</button>
      </section>
    </div>
  );
}

export default Home;
