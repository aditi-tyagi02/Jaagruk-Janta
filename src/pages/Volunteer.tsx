import React from 'react';
import { Calendar, MapPin, Clock, Award } from 'lucide-react';
import type { Volunteer, Task } from '../types';

const VolunteerPage = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Distribute Medical Supplies',
      description: 'Help distribute medical supplies to local clinics',
      location: 'Mumbai Central',
      date: '2024-03-20',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Community Awareness Drive',
      description: 'Conduct awareness sessions about pandemic preparedness',
      location: 'Andheri East',
      date: '2024-03-22',
      status: 'in-progress'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of volunteers and make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Volunteer Registration</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., First Aid, Teaching, Driving"
                    className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Both</option>
                    </select>
                    <select className="rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Register as Volunteer
                </button>
              </form>
            </div>
          </div>

          {/* Available Tasks */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Available Tasks</h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{task.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {task.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(task.date).toLocaleDateString()}
                      </div>
                    </div>
                    <button className="mt-3 w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
                      Sign Up
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;