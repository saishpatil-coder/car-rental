
export default function VehicleCard({ vehicle })
{
    const handleBookNow = () =>
    {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="card shadow-sm border-0" style={{
            width: '260px', borderRadius: '1rem', background: 'linear-gradient(135deg, #f8f9fa, rgb(222, 230, 226))',
        }}>
            <div className="card-body p-3">
                {/* Model Name */}
                <p className=" mb-1" style={{ fontSize: '17px' , fontWeight:500 }}>
                    {vehicle.model}
                </p>
            </div>

            {/* Vehicle Image - Fixed Dimensions */}
            <div style={{ width: '260px', height: '150px', overflow: 'hidden' }}>
                <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div className="card-body pt-3 pb-2">
                {/* Features: Type, Transmission, Seats */}
                <div className="d-flex justify-content-between text-muted mb-3" style={{ fontSize: '14px' }}>
                    <span>{vehicle.type}</span>
                    <span>⚙️ {vehicle.transmission}</span>
                    <span>🪑 {vehicle.seats}</span>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between align-items-center">
                    <button
                        onClick={handleBookNow}
                        className="text-primary fw-semibold bg-transparent border-0 p-0"
                        style={{ fontSize: '14px' }}
                    >
                        Book Now
                    </button>
                    <div
                        className="text-primary fw-semibold"
                        style={{ fontSize: '14px', cursor: 'pointer' }}
                    >
                        View More <span style={{ fontSize: '16px' }}>➝</span>
                    </div>
                </div>
            </div>
        </div>
    );
}