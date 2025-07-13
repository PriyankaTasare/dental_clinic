import '../styles/main.css';

function Services() {
  const services = [
    {
      title: 'Teeth Cleaning',
      img: 'https://cdn-icons-png.flaticon.com/512/2936/2936669.png',
      desc: 'Professional cleaning to remove plaque, tartar, and stains from your teeth.',
    },
    {
      title: 'Root Canal Treatment',
      img: 'https://cdn-icons-png.flaticon.com/512/2649/2649271.png',
      desc: 'Painless root canal therapy to save your natural teeth from decay.',
    },
    {
      title: 'Tooth Extraction',
      img: 'https://cdn-icons-png.flaticon.com/512/3190/3190495.png',
      desc: 'Safe and gentle tooth extractions using modern equipment.',
    },
    {
      title: 'Dental Implants',
      img: 'https://cdn-icons-png.flaticon.com/512/2944/2944121.png',
      desc: 'Permanent tooth replacement solution with titanium implants.',
    },
    {
      title: 'Braces & Aligners',
      img: 'https://cdn-icons-png.flaticon.com/512/5351/5351029.png',
      desc: 'Custom braces and clear aligners for straighter teeth.',
    },
    {
      title: 'Smile Makeover',
      img: 'https://cdn-icons-png.flaticon.com/512/4406/4406841.png',
      desc: 'Cosmetic treatments like whitening, reshaping, and veneers.',
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Dental Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
