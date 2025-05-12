export default function Navbar()
{
  const handleScroll = (id) =>
  {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          .custom-navbar {
            background-color: rgba(255, 255, 255, 0.50); /* Highly transparent */
            transition: background-color 0.3s ease;
            margin: 2px; /* Increased margin */
            padding: 2px 0; /* Increased vertical padding */
            border-radius: 0px; /* Keep no corners */
          }

          .custom-navbar:hover {
            background-color: rgba(255, 255, 255, 0.35); /* Slightly less transparent on hover */
          }

          .navbar-logo {
            width: 32px;
            height: 32px;
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .navbar-logo:hover {
            transform: scale(1.15);
            filter: brightness(1.2) sepia(1) hue-rotate(160deg); /* Teal tint */
          }

          .navbar-brand-text {
            font-family: 'Great Vibes', cursive;
            font-size: 1.8rem; /* Increased font size */
            font-weight: 400;
            color: rgb(55, 8, 8); /* Navy */
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          }

          .nav-link {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.1rem; /* Increased font size */
            color: rgb(20, 25, 25);
            padding: 6px 12px;
            border-radius: 4px;
            transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
          }

          .nav-link:hover {
            color: #00CED1; /* Teal */
            background-color: rgba(0, 206, 209, 0.2); /* Light teal */
            transform: scale(1.05);
          }

          .nav-link i {
            font-size: 1rem; /* Increased icon size */
            transition: color 0.3s ease;
          }

          .nav-link:hover i {
            color: #00CED1;
          }

          @media (max-width: 768px) {
            .navbar-brand-text {
              font-size: 1.4rem; /* Increased mobile font size */
            }
            .navbar-logo {
              width: 28px;
              height: 28px;
            }
            .nav-link {
              font-size: 1rem; /* Increased mobile font size */
              padding: 6px 8px;
            }
            .custom-navbar {
              margin: 2px; /* Adjusted mobile margin */
              padding: 8px 0; /* Adjusted mobile padding */
            }
              
          }
            .navbar-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s ease, filter 0.3s ease;
}

        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar shadow-sm rounded animate__animated animate__fadeIn">
        <div className="container px-2">
          <a className="navbar-brand d-flex align-items-center animate__animated animate__bounceIn" href="#home">
            <img
              src="/thar.png"
              alt="Luxury Car Rental Logo"
              className="navbar-logo me-2"
            />
            <span className="navbar-brand-text">Luxury Car Rental</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link d-flex align-items-center" onClick={() => handleScroll('home')}>
                  <i className="bi bi-house me-1"></i> Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link d-flex align-items-center" onClick={() => handleScroll('about')}>
                  <i className="bi bi-info-circle me-1"></i> About
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link d-flex align-items-center" onClick={() => handleScroll('vehicles')}>
                  <i className="bi bi-car-front me-1"></i> Vehicles
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link d-flex align-items-center" onClick={() => handleScroll('contact')}>
                  <i className="bi bi-telephone me-1"></i> Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}