import React from 'react';
import { BookOpen, Video, FileText, Calendar } from 'lucide-react';
import type { EducationalResource, Webinar } from '../types';

const Education = () => {
  const resources: EducationalResource[] = [
    {
      id: '1',
      title: 'Understanding Pandemic Preparedness',
      type: 'article',
      topic: 'Preparedness',
      description: 'A comprehensive guide to preparing for health emergencies',
      url: '#',
      thumbnail: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57'
    },
    {
      id: '2',
      title: 'Essential First Aid Skills',
      type: 'video',
      topic: 'Healthcare',
      description: 'Learn basic first aid techniques',
      url: '#',
      thumbnail: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
      duration: '15:30'
    }
  ];

  const webinars: Webinar[] = [
    {
      id: '1',
      title: 'Building Community Resilience',
      speaker: 'Dr. Sarah Johnson',
      date: '2024-04-15',
      time: '10:00 AM IST',
      description: 'Learn strategies for strengthening community preparedness',
      registrationUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access verified information and resources to enhance your knowledge
          </p>
        </div>

        {/* Resource Library */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {resource.thumbnail && (
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {resource.type === 'video' ? (
                      <Video className="w-5 h-5 text-coral-600 mr-2" />
                    ) : (
                      <FileText className="w-5 h-5 text-teal-600 mr-2" />
                    )}
                    <span className="text-sm font-medium text-gray-600">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  {resource.duration && (
                    <p className="text-sm text-gray-500 mb-4">Duration: {resource.duration}</p>
                  )}
                  <a
                    href={resource.url}
                    className="text-teal-600 font-medium hover:text-teal-700"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {webinar.thumbnail && (
                  <img
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-gold-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">
                      {new Date(webinar.date).toLocaleDateString()} at {webinar.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-2">Speaker: {webinar.speaker}</p>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <a
                    href={webinar.registrationUrl}
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;