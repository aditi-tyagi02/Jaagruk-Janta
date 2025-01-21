import React, { useState } from 'react';
import { ArrowRight, Shield, Users, BookOpen, PiggyBank, MessageSquare, Search, Award, Star, Trophy, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SuccessStory, HeroProfile } from '../types';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: 'Pandemic Resiliency Index',
      description: 'Assess your preparedness and get personalized recommendations',
      link: '/resiliency'
    },
    {
      icon: <Users className="w-12 h-12 text-coral-600" />,
      title: 'Resource Exchange',
      description: 'Connect with donors and those in need',
      link: '/resources'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-gold-600" />,
      title: 'Educational Hub',
      description: 'Access verified information and resources',
      link: '/education'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-teal-600" />,
      title: 'Crowdfunding',
      description: 'Support and create campaigns for those in need',
      link: '/crowdfunding'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-coral-600" />,
      title: 'Community Forum',
      description: 'Join discussions and share experiences',
      link: '/community'
    }
  ];

  const successStories: SuccessStory[] = [
    {
      id: '1',
      title: 'Community Oxygen Bank Success',
      description: 'How a local community came together to create an oxygen bank serving over 500 families during the peak of the pandemic.',
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5',
      date: '2024-03-10',
      category: 'Healthcare',
      author: 'Dr. Amit Patel',
      impact: 'Served 500+ families'
    },
    {
      id: '2',
      title: 'Digital Learning Initiative',
      description: 'Volunteers helped 1000+ students continue their education through innovative digital learning solutions.',
      image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b',
      date: '2024-03-08',
      category: 'Education',
      author: 'Priya Sharma',
      impact: 'Helped 1000+ students'
    },
    {
      id: '3',
      title: 'Rural Vaccination Drive',
      description: 'A successful vaccination campaign that reached 50 remote villages and vaccinated over 10,000 people.',
      image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57',
      date: '2024-03-05',
      category: 'Healthcare',
      author: 'Dr. Rajesh Kumar',
      impact: 'Vaccinated 10,000+ people'
    }
  ];

  const heroes: HeroProfile[] = [
    {
      id: '1',
      name: 'Dr. Sarah Mathews',
      image: 'https://images.unsplash.com/photo-1584516509463-6d3e8e80a1f6',
      contribution: 'Led emergency medical response team',
      hoursServed: 500,
      tasksCompleted: 120,
      badges: [
        { id: '1', name: 'Healthcare Hero', icon: 'heart' },
        { id: '2', name: 'Community Leader', icon: 'star' },
        { id: '3', name: 'First Responder', icon: 'shield' }
      ],
      location: 'Mumbai',
      joinedDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Rahul Sharma',
      image: 'https://images.unsplash.com/photo-1584516509462-73c5f8c4e75f',
      contribution: 'Organized community support network',
      hoursServed: 350,
      tasksCompleted: 85,
      badges: [
        { id: '1', name: 'Community Champion', icon: 'users' },
        { id: '2', name: 'Resource Coordinator', icon: 'box' }
      ],
      location: 'Delhi',
      joinedDate: '2023-07-20'
    }
  ];

  const filteredStories = successStories
    .filter(story => 
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart className="w-4 h-4" />;
      case 'star': return <Star className="w-4 h-4" />;
      case 'shield': return <Shield className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connecting Resources,<br />People, and Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Join our community-driven platform to strengthen pandemic preparedness
              and support those in need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/resiliency"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
              >
                Take Resiliency Quiz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/resources"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"
              >
                Find Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive set of tools and resources designed to help
              communities stay prepared and connected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-teal-600 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inspiring stories of resilience and community support
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 justify-between">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Most Recent</option>
              <option value="impact">Most Impactful</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                      {story.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{story.author}</span>
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>

      {/* Wall of Fame Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Wall of Fame</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Celebrating our community heroes making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroes.map((hero) => (
              <div
                key={hero.id}
                className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{hero.name}</h3>
                    <p className="text-gray-400">{hero.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{hero.contribution}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-500">{hero.hoursServed}</div>
                    <div className="text-sm text-gray-400">Hours Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral-500">{hero.tasksCompleted}</div>
                    <div className="text-sm text-gray-400">Tasks Completed</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hero.badges.map((badge) => (
                    <span
                      key={badge.id}
                      className="flex items-center px-3 py-1 rounded-full bg-gray-700 text-sm"
                    >
                      {getBadgeIcon(badge.icon)}
                      <span className="ml-1">{badge.name}</span>
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Joined {new Date(hero.joinedDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Nominate a Hero
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;