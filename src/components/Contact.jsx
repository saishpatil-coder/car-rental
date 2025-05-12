import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact()
{
    return (
        <section
            id="contact"
            className="py-6 text-white"
            style={{
                backgroundImage: `linear-gradient(rgba(10, 20, 40, 0.7), rgba(10, 20, 40, 0.85)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: 'Merriweather, serif',
                padding: '60px 20px',
            }}
        >
            <div className="container text-center" style={{ maxWidth: '800px' }}>
                <h2
                    className="display-5 fw-bold mb-4"
                    style={{
                        letterSpacing: '1px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                        color: '#fff',
                    }}
                >
                    Connect with Luxury
                </h2>
                <p
                    className="lead mb-5 mx-auto"
                    style={{
                        maxWidth: '600px',
                        fontWeight: 300,
                        fontSize: '1.15rem',
                        lineHeight: '1.7',
                        textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                        color: '#f1f1f1',
                    }}
                >
                    Embark on an unforgettable journey through Goa with Luxury Car Rental.
                    Our premium vehicles await your adventure. Contact us directly to
                    explore our exclusive offerings and personalized rates—no online
                    bookings, just a personal touch!
                </p>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a
                        href="tel:+919421221314"
                        className="btn btn-warning d-flex align-items-center justify-content-center gap-2"
                        style={{
                            fontSize: '15px',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(255,193,7,0.3)',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <i className="bi bi-telephone-fill" style={{ fontSize: '16px' }}></i>
                        Call Us
                    </a>

                    <a
                        href="https://wa.me/918446054314?text=Hi%20Luxury%20Car%20Rental,%20I'm%20interested%20in%20renting%20a%20premium%20vehicle%20in%20Goa!%20Can%20you%20share%20more%20details?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success d-flex align-items-center justify-content-center gap-2"
                        style={{
                            fontSize: '15px',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(40,167,69,0.3)',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <i className="bi bi-whatsapp" style={{ fontSize: '16px' }}></i>
                        WhatsApp Chat
                    </a>
                </div>
            </div>
        </section>
    );
}
