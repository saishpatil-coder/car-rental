export default function Hero()
{
    const slides = [
        { image: "/mini-cooper.jpeg", alt: "Mini Cooper Convertible" },
        { image: "/bullet.png", alt: "Royal Enfield Bullet" },
        { image: "/scooter.jpg", alt: "scooter" },
      { image: "/thar.png", alt: "scooter" }
    ];

    return (
        <>
            <style>
                {`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@600;700&display=swap');

    .hero-section {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .hero-slide {
      height: 90vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
    }

    .hero-title {
      font-family: 'Cinzel', serif;
      font-size: 4rem;
      font-weight: 700;
      color: #FFFFFF;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    }

    .hero-tagline {
      font-family: 'Poppins', sans-serif;
      font-size: 1.25rem;
    }

    @media (max-width: 992px) {
      .hero-title {
        font-size: 3rem;
      }
    }

    @media (max-width: 768px) {
      .hero-slide {
        height: 50vh;
      }
      .hero-title {
        font-size: 2.25rem;
      }
      .hero-tagline {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.75rem;
      }
      .hero-tagline {
        font-size: 0.9rem;
      }
    }
  `}
            </style>


            <section id="home" className="hero-section">
                <div
                    id="heroCarousel"
                    className="carousel slide carousel-fade shadow-lg rounded"
                    data-bs-ride="carousel"
                    data-bs-interval="5000"
                >
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            >
                                <div
                                    className="hero-slide"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="hero-overlay"></div>
                                    <div className="d-flex flex-column justify-content-center align-items-center text-center text-white px-4 z-2 position-relative">
                                        <h1 className="hero-title mb-3 animate__animated animate__fadeInDown animate__delay-1s">
                                            Luxury Car Rentals
                                        </h1>
                                        <p className="hero-tagline mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                                            Explore Goa in Style & Luxury
                                        </p>
                                        <a
                                            href="#contact"
                                            className="btn btn-hero animate__animated animate__zoomIn animate__delay-3s"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
}