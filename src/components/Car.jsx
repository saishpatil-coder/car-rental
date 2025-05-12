import { useState } from 'react';
import vehicles from '../assets/VehicleInfo';
import VehicleCard from './CommonVehicleCard';

export default function Car()
{
    const [filters, setFilters] = useState({
        transmission: 'all',
        fuelType: 'all',
        seats: 'all',
    });

    const cars = vehicles.filter((v) => v.type === 'Car' || v.type === 'SUV');

    // Filter cars based on selected filters
    const filteredCars = cars.filter((vehicle) =>
    {
        const transmissionMatch =
            filters.transmission === 'all' || vehicle.transmission === filters.transmission;
        const fuelTypeMatch =
            filters.fuelType === 'all' || vehicle.fuelType === filters.fuelType;
        const seatsMatch =
            filters.seats === 'all' || vehicle.seats === parseInt(filters.seats);
        return transmissionMatch && fuelTypeMatch && seatsMatch;
    });

    // Handle filter button click
    const handleFilterChange = (filterType, value) =>
    {
        setFilters((prev) => ({ ...prev, [filterType]: value }));
    };

    // Clear all filters
    const clearFilters = () =>
    {
        setFilters({
            transmission: 'all',
            fuelType: 'all',
            seats: 'all',
        });
    };

    return (
        <section
            className="mt-5 py-5"
            style={{
                fontFamily: 'Merriweather, serif',
                borderRadius: '1.2rem',
                background: 'linear-gradient(to right,rgb(177, 196, 234),rgb(77, 103, 218))', // light grey to soft blue
            }}
        >
    
            <div className="container">
                {/* Filter Section */}
                <div className="mb-4 p-4 bg-white rounded shadow">
                    <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem' }}>
                        Filter Cars
                    </h3>
                    <div className="row g-3">
                        <div className="col-md-4 col-12">
                            <label className="form-label text-dark">Transmission</label>
                            <div className="btn-group d-flex flex-wrap gap-2">
                                {['all', 'Automatic', 'Manual'].map((value) => (
                                    <button
                                        key={value}
                                        className={`btn ${filters.transmission === value
                                                ? 'btn-danger'
                                                : 'btn-outline-danger'
                                            } rounded-pill px-3`}
                                        onClick={() => handleFilterChange('transmission', value)}
                                    >
                                        {value === 'all' ? 'All' : value}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <label className="form-label text-dark">Fuel Type</label>
                            <div className="btn-group d-flex flex-wrap gap-2">
                                {['all', 'Diesel', 'Petrol', 'Electric'].map((value) => (
                                    <button
                                        key={value}
                                        className={`btn ${filters.fuelType === value
                                                ? 'btn-danger'
                                                : 'btn-outline-danger'
                                            } rounded-pill px-3`}
                                        onClick={() => handleFilterChange('fuelType', value)}
                                    >
                                        {value === 'all' ? 'All' : value}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <label className="form-label text-dark">Seats</label>
                            <div className="btn-group d-flex flex-wrap gap-2">
                                {['all', 2, 4, 5, 6, 7].map((value) => (
                                    <button
                                        key={value}
                                        className={`btn ${filters.seats === value.toString()
                                                ? 'btn-danger'
                                                : 'btn-outline-danger'
                                            } rounded-pill px-3`}
                                        onClick={() => handleFilterChange('seats', value.toString())}
                                    >
                                        {value === 'all' ? 'All' : `${value} Seats`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-end mt-3">
                        <button
                            className="btn btn-danger rounded-pill px-4"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {/* Car Listings */}
                <h2 className="display-6 fw-bold text-center mb-5">Our Fleet</h2>
                {filteredCars.length === 0 ? (
                    <div className="text-center text-muted">
                        <p>No cars match the selected filters.</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                        {filteredCars.map((vehicle, index) => (
                            <div key={`${vehicle.model}-${index}`} className="col">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}