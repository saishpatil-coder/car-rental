import { useNavigate } from 'react-router-dom';
import vehicles from '../assets/VehicleInfo';
import VehicleCard from './VehicleCard';

export default function Vehicles()
{
    const navigate = useNavigate();
    const cars = vehicles.filter((v) => v.type === 'Car' || v.type === 'SUV');
    const bikes = vehicles.filter((v) => v.type === 'Bike');

    // Split cars and bikes into two lanes (roughly equal)
    const carsLane1 = cars.slice(0, Math.ceil(cars.length / 2));
    const carsLane2 = cars.slice(Math.ceil(cars.length / 2));
    const bikesLane1 = bikes.slice(0, Math.ceil(bikes.length / 2));
    const bikesLane2 = bikes.slice(Math.ceil(bikes.length / 2));

    return (
        <section id="vehicles" className="py-5"
            style={{
                background: 'linear-gradient(135deg, #f8f9fa, rgb(222, 230, 226))',
                backgroundImage: `linear-gradient(rgba(10, 20, 40, 0.7), rgba(10, 20, 40, 0.85)),url('/sea.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color:"white",
            }}
        >
            <div className="container">
                <h2 className="display-6 fw-bold text-center mb-5">Our Fleet</h2>

                <h4 className="mb-3">Cars</h4>
                <div className="mb-3">
                    <div className="d-flex overflow-x-auto pb-4 scroll-container">
                        {carsLane1.map((vehicle, index) => (
                            <div key={index} className="flex-shrink-0 mx-2">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex overflow-x-auto pb-4 scroll-container">
                        {carsLane2.map((vehicle, index) => (
                            <div key={index} className="flex-shrink-0 mx-2">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-end mb-4" data-aos="fade-up" data-aos-delay="100">
                    <button
                        className="btn btn-danger rounded-pill px-4"
                        onClick={() => navigate('/cars')}
                    >
                        View All
                    </button>
                </div>

                <h4 className="mt-5 mb-3">Bikes</h4>
                <div className="mb-3">
                    <div className="d-flex overflow-x-auto pb-4 scroll-container">
                        {bikesLane1.map((vehicle, index) => (
                            <div key={index} className="flex-shrink-0 mx-2">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex overflow-x-auto pb-4 scroll-container">
                        {bikesLane2.map((vehicle, index) => (
                            <div key={index} className="flex-shrink-0 mx-2">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-end mb-4" data-aos="fade-up" data-aos-delay="100">
                    <button
                        className="btn btn-danger rounded-pill px-4"
                        onClick={() => navigate('/bikes')}
                    >
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
}