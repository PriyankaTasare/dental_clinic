import '../styles/main.css'; 

function About() {
  return (
    <div className="about-page">
      {/* Clinic Background */}
      <section className="clinic-background">
        <h1>About Smile Dental Clinic</h1>
        <p>
          Established in 2012, Smile Dental Clinic has grown into a trusted name
          for affordable and advanced dental care. Our clinic features modern
          dental technology, a relaxing atmosphere, and a strong reputation for
          excellence.
        </p>
      </section>

     
      <section className="practitioner-details">
        <h2>Meet Our Dentists</h2>
        <ul>
          <li>
            <strong>Dr. Priya Sharma</strong> – BDS, MDS (Orthodontics) with 12+
            years of experience.
          </li>
          <li>
            <strong>Dr. Raj Mehta</strong> – BDS, Expert in cosmetic and
            restorative dentistry.
          </li>
        </ul>
      </section>

    
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make high-quality dental care accessible,
          comfortable, and tailored to each patient. We believe in long-lasting
          smiles and compassionate treatment.
        </p>
      </section>
    </div>
  );
}

export default About;
