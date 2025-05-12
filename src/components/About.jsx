import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaCarSide, FaCheckCircle, FaHistory, FaUsers } from 'react-icons/fa';
import { SiAudi, SiBmw, SiMercedes, SiPorsche } from 'react-icons/si';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function About()
{
    useEffect(() =>
    {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    }, []);

    const stats = [
        { icon: <FaHistory size={30} />, count: '20+ Yrs', label: 'of Experience' },
        { icon: <FaUsers size={30} />, count: '2000+', label: 'Clients' },
        { icon: <FaCarSide size={30} />, count: '50+', label: 'Vehicles' },
    ];

    const logos = [
        <SiBmw size={25} />,
        <SiMercedes size={25} />,
        <SiAudi size={25} />,
        <SiPorsche size={25} />,
    ];

    // Google Map configuration
    const mapContainerStyle = {
        width: '100%',
        height: '300px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    };

    const center = {
        lat: 15.537865, // Precise latitude for Patil Car Rental, Calangute, Goa
        lng: 73.762607, // Precise longitude for Patil Car Rental, Calangute, Goa
    };

    return (
        <section
            id="about"
            className="py-4"
            style={{
                background: 'linear-gradient(135deg, #f8f9fa, rgb(222, 230, 226))',
                minHeight: '85vh',
                overflow: 'hidden',
                fontFamily: 'Merriweather, serif',
            }}
        >
            <Container>
                <h2
                    className="text-center fw-bold mb-4"
                    data-aos="zoom-in"
                    style={{ fontSize: '2.5rem', color: '#343a40', fontWeight: 100 }}
                >
                    About Us
                </h2>

                {/* Stats */}
                <Row className="text-center mb-4">
                    {stats.map((item, i) => (
                        <Col
                            lg={4}
                            md={4}
                            sm={4}
                            xs={4}
                            className="mb-1"
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div
                                className="text-center py-4 px-3 stat-card rounded-3"
                                style={{
                                    width: '100%',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div className="text-primary mb-2">{item.icon}</div>
                                <h4 className="fw-bold text-dark">{item.count}</h4>
                                <p className="text-muted mb-0">{item.label}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Content */}
                <Row className="align-items-center mb-4">
                    <Col md={6} data-aos="fade-right">
                        <img
                            src="about.jpg"
                            alt="Luxury Car"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
                        <div className="p-4 bg-white rounded shadow">
                            <h3 className="fw-bold text-dark mb-3">Luxury on Wheels</h3>
                            <p className="text-muted">
                                Premium cars, seamless bookings, and 24/7 support for an unforgettable ride.
                            </p>
                            <ul className="list-unstyled">
                                {['Exclusive Fleet', 'Easy Reservations', 'Dedicated Support'].map(
                                    (text, i) => (
                                        <li key={i} className="d-flex align-items-center mb-2">
                                            <FaCheckCircle className="text-success me-2" />
                                            <span className="text-dark">{text}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                            <a
                                href="/contact"
                                className="btn btn-danger rounded-pill px-4 mt-3"
                            >
                                Book Your Ride
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Logos */}
                <Row className="mt-4 mb-4" data-aos="fade-up">
                    <Col className="text-center">
                        <div className="d-flex justify-content-center gap-4 flex-wrap">
                            {logos.map((Logo, i) => (
                                <div key={i} className="text-secondary">{Logo}</div>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Google Map */}
                <Row className="mt-4" data-aos="fade-up">
                    <Col md={12}>
                        <h3
                            className="text-center fw-bold mb-3"
                            style={{ fontSize: '1.75rem', color: '#343a40' }}
                        >
                            Our Location
                        </h3>
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={15}
                            >
                                <Marker
                                    position={center}
                                    title="Patil Car Rental"
                                    label={{
                                        text: 'Patil Car Rental',
                                        color: '#ffffff',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        className: 'map-label',
                                    }}
                                />
                            </GoogleMap>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}