import React, { useState } from 'react';
import { Package, Search, MapPin, Phone, Plus } from 'lucide-react';
import type { Resource } from '../types';

const ResourcesPage = () => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [resources] = useState<Resource[]>([
    {
      id: '1',
      type: 'PPE',
      name: 'N95 Masks',
      location: 'Mumbai Central',
      quantity: 1000,
      status: 'available',
      contact: '+91 98765-43210'
    },
    {
      id: '2',
      type: 'Medical Equipment',
      name: 'Oxygen Concentrators',
      location: 'Delhi NCR',
      quantity: 5,
      status: 'available',
      contact: '+91 98765-43211'
    },
    {
      id: '3',
      type: 'Medicine',
      name: 'Remdesivir',
      location: 'Bangalore',
      quantity: 50,
      status: 'requested',
      contact: '+91 98765-43212'
    }
  ]);

  const [filters, setFilters] = useState({
    type: '',
    location: '',
    status: ''
  });

  const filteredResources = resources.filter(resource => {
    return (
      (!filters.type || resource.type.toLowerCase().includes(filters.type.toLowerCase())) &&
      (!filters.location || resource.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.status || resource.status === filters.status)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Exchange</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with donors and find essential resources in your area
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setShowDonateForm(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Donate Resources
          </button>
          <button
            onClick={() => setShowDonateForm(true)}
            className="bg-coral-600 text-white px-6 py-3 rounded-lg hover:bg-coral-700 transition-colors flex items-center"
          >
            <Package className="w-5 h-5 mr-2" />
            Request Resources
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resource Type
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by type..."
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <option value="">All</option>
                <option value="available">Available</option>
                <option value="requested">Requested</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                  <p className="text-gray-600">{resource.type}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    resource.status === 'available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {resource.status === 'available' ? 'Available' : 'Requested'}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {resource.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Package className="w-5 h-5 mr-2" />
                  Quantity: {resource.quantity}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  {resource.contact}
                </div>
              </div>
              <button className="mt-4 w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Contact Donor
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;