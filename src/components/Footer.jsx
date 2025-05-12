import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer()
{
    return (
        <footer
            className="text-white pt-4 pb-3"
            style={{
                background: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: 'Merriweather, serif',
            }}
        >
            <div className="container">
                <div className="row text-start">
                    {/* Quick Links */}
                    <div className="col-6 mb-3">
                        <h5
                            className="text-uppercase fw-bold mb-3"
                            style={{ letterSpacing: '1px', fontSize: '1.1rem' }}
                        >
                            Quick Links
                        </h5>
                        <ul className="list-unstyled d-flex flex-wrap gap-2 justify-content-start">
                            <li>
                                <Link
                                    to="/cars"
                                    className="text-white text-decoration-none footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    Cars
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/bikes"
                                    className="text-white text-decoration-none footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    Bikes
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#location"
                                    className="text-white text-decoration-none footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    Location
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-white text-decoration-none footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-white text-decoration-none footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-6 mb-3">
                        <h5
                            className="text-uppercase fw-bold mb-3"
                            style={{ letterSpacing: '1px', fontSize: '1.1rem' }}
                        >
                            Contact Us
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <a
                                    href="tel:+919421221314"
                                    className="text-white text-decoration-none d-flex align-items-center justify-content-start gap-2 footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    <i className="bi bi-telephone-fill" style={{ fontSize: '0.9rem' }}></i>
                                    +91 94212 21314
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="https://wa.me/+918446054314?text=Hi%20Luxury%20Car%20Rental,%20I'm%20interested%20in%20renting%20a%20premium%20vehicle%20in%20Goa!%20Can%20you%20share%20more%20details?"
                                    target="_blank"
                                    className="text-white text-decoration-none d-flex align-items-center justify-content-start gap-2 footer-link"
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    <i className="bi bi-whatsapp" style={{ fontSize: '0.9rem' }}></i>
                                    +91 84460 54314
                                </a>
                            </li>
                            <li>
                                <p
                                    className="text-white mb-0"
                                    style={{ fontSize: '0.85rem', fontWeight: 300 }}
                                >
                                    Calangute, Goa, India
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Luxury Car Rental (Tagline & Socials) */}
                <div className="row text-center">
                    <div className="col-12 mb-3">
                        <h5
                            className="text-uppercase fw-bold mb-3"
                            style={{ letterSpacing: '1px', fontSize: '1.1rem' }}
                        >
                            Luxury Car Rental
                        </h5>
                        <p
                            className="mb-2"
                            style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: '1.6' }}
                        >
                            Experience Goa in style with our premium vehicles. Your adventure begins with us.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <a
                                href="https://www.instagram.com/luxurycarrentalgoa"
                                target="_blank"
                                className="text-white footer-link"
                                style={{ fontSize: '1.25rem' }}
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                href="https://wa.me/+918446054314"
                                target="_blank"
                                className="text-white footer-link"
                                style={{ fontSize: '1.25rem' }}
                            >
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-3">
                    <p
                        className="mb-0"
                        style={{ fontSize: '0.8rem', fontWeight: 300 }}
                    >
                        © 2025 Luxury Car Rental, Calangute, Goa. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Footer Styles */}
            <style>{`
                .footer-link {
                    transition: color 0.3s ease, transform 0.2s ease;
                }
                .footer-link:hover {
                    color: #ffc107;
                    transform: scale(1.05);
                }
            `}</style>
        </footer>
    );
}