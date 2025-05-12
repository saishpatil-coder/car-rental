import React, { useState } from 'react';
import vehicles from '../assets/VehicleInfo';
import VehicleCard from './CommonVehicleCard';

export default function Bike()
{
    const [filters, setFilters] = useState({
        fuelType: 'all',
        vehicleType: 'all',
    });

    const bikes = vehicles.filter((v) => v.type === 'Bike');

    // Filter bikes based on selected filters
    const filteredBikes = bikes.filter((vehicle) =>
    {
        const fuelTypeMatch =
            filters.fuelType === 'all' || vehicle.fuelType === filters.fuelType;
        const vehicleTypeMatch =
            filters.vehicleType === 'all' || vehicle.vehicleType === filters.vehicleType;
        return fuelTypeMatch && vehicleTypeMatch;
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
            fuelType: 'all',
            vehicleType: 'all',
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
                        Filter Bikes
                    </h3>
                    <div className="row g-3">
                        <div className="col-md-6 col-12">
                            <label className="form-label text-dark">Fuel Type</label>
                            <div className="btn-group d-flex flex-wrap gap-2">
                                {['all', 'Petrol', 'Diesel', 'Electric'].map((value) => (
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
                        <div className="col-md-6 col-12">
                            <label className="form-label text-dark">Vehicle Type</label>
                            <div className="btn-group d-flex flex-wrap gap-2">
                                {['all', 'Scooter', 'Bike'].map((value) => (
                                    <button
                                        key={value}
                                        className={`btn ${filters.vehicleType === value
                                                ? 'btn-danger'
                                                : 'btn-outline-danger'
                                            } rounded-pill px-3`}
                                        onClick={() => handleFilterChange('vehicleType', value)}
                                    >
                                        {value === 'all' ? 'All' : value}
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

                {/* Bike Listings */}
                <h2 className="display-6 fw-bold text-center mb-5">All Bikes</h2>
                {filteredBikes.length === 0 ? (
                    <div className="text-center text-muted">
                        <p>No bikes match the selected filters.</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {filteredBikes.map((vehicle, index) => (
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