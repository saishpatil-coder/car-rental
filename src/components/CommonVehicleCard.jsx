import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CommonVehicleCard({ vehicle })
{
    const handleCallToBook = () =>
    {
        window.location.href = 'tel:+919421221314';
    };

    const handleWhatsAppMessage = () =>
    {
        const message = `Hi, I'm interested in booking the ${vehicle.model}. Can you provide more details?`;
        const whatsappUrl = `https://wa.me/+918446054314?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            className="card shadow-sm"
            style={{
                border: '2px solid #e0e0e0',
                borderRadius: '1rem',
                fontFamily: 'Merriweather, serif',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                maxWidth: '360px',
                margin: '0 auto',
                background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
                overflow: 'hidden', // Ensure content respects border radius
            }}
            onMouseEnter={(e) =>
            {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) =>
            {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
        >
            <div
                className="card-body p-4"
                style={{
                    background: '#f1f3f5',
                    borderRadius: '1.2rem 1.2rem 0 0',
                }}
            >
                <h5
                    className="mb-1"
                    style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                    }}
                >
                    {vehicle.model}
                </h5>
                <p
                    className="text-muted mb-0"
                    style={{
                        fontSize: '13px',
                        fontWeight: 300,
                    }}
                >
                    {vehicle.brand} | {vehicle.modelYear}
                </p>
            </div>

            <div
                style={{
                    width: '100%',
                    height: vehicle.type === 'Bike' ? '180px' : '200px',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
            </div>

            <div className="card-body pt-4 pb-4">
                <div
                    className="d-flex justify-content-between text-muted mb-2"
                    style={{ fontSize: '13px' }}
                >
                    {vehicle.type && <span>🚗 {vehicle.type}</span>}
                    {vehicle.transmission && <span>⚙️ {vehicle.transmission}</span>}
                    {vehicle.seats && <span>🪑 {vehicle.seats}</span>}
                </div>
                <div
                    className="d-flex justify-content-between text-muted mb-3"
                    style={{ fontSize: '13px' }}
                >
                    {vehicle.fuelType && <span>⛽ {vehicle.fuelType}</span>}
                    {vehicle.mileage && <span>📏 {vehicle.mileage}</span>}
                    {vehicle.petrolCapacity && <span>🛢️ {vehicle.petrolCapacity}</span>}
                </div>
                {vehicle.price && (
                    <div
                        className="text-center mb-3"
                        style={{
                            fontSize: '23px',
                            fontWeight: 700,
                            color: '#198754',
                            letterSpacing: '0.5px',
                        }}
                    >
                     {vehicle.price}
                    </div>
                )}

                <div className="d-flex flex-row align-items-end justify-content-end gap-2">
                    <button
                        onClick={handleCallToBook}
                        className="btn btn-primary d-flex align-items-center justify-content-center gap-1"
                        style={{
                            fontSize: '12px',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            width: '110px',
                            transition: 'background-color 0.3s, transform 0.2s',
                        }}
                        aria-label={`Call to book ${vehicle.model}`}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <i className="bi bi-telephone-fill" style={{ fontSize: '12px' }}></i>
                        Call to Book
                    </button>
                    <button
                        onClick={handleWhatsAppMessage}
                        className="btn btn-success d-flex align-items-center justify-content-center gap-1"
                        style={{
                            fontSize: '12px',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            width: '110px',
                            transition: 'background-color 0.3s, transform 0.2s',
                        }}
                        aria-label={`Send WhatsApp message about ${vehicle.model}`}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <i className="bi bi-whatsapp" style={{ fontSize: '12px' }}></i>
                        WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}