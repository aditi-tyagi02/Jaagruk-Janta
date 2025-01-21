import React from 'react';
import { PiggyBank, Users, Clock } from 'lucide-react';
import type { Campaign } from '../types';

const Crowdfunding = () => {
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Medical Supplies for Rural Clinic',
      description: 'Help us provide essential medical supplies to a rural clinic serving 1000+ families',
      goal: 500000,
      raised: 350000,
      daysLeft: 15,
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
    },
    {
      id: '2',
      title: 'Community Oxygen Bank',
      description: 'Setting up an oxygen bank for emergency situations in our community',
      goal: 800000,
      raised: 600000,
      daysLeft: 20,
      image: 'https://images.unsplash.com/photo-1584715642381-6f1c2b3c3449'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crowdfunding Campaigns</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support initiatives that make a difference in your community
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Start a Campaign
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-600 h-2 rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <PiggyBank className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-gray-600">
                      ₹{campaign.raised.toLocaleString()} raised
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-coral-600 mr-2" />
                    <span className="text-gray-600">{campaign.daysLeft} days left</span>
                  </div>
                </div>

                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crowdfunding;