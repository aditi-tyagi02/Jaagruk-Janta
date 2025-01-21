import React from 'react';
import { MessageSquare, ThumbsUp, User } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      id: '1',
      title: 'Tips for maintaining mental health during lockdown',
      author: 'Dr. Priya Singh',
      date: '2024-03-15',
      replies: 24,
      upvotes: 156,
      category: 'Tips',
      preview: 'Here are some effective strategies I have found helpful...'
    },
    {
      id: '2',
      title: 'Looking for volunteers in Bangalore South',
      author: 'Rahul Kumar',
      date: '2024-03-14',
      replies: 18,
      upvotes: 89,
      category: 'Volunteer',
      preview: 'We need volunteers to help distribute supplies in...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, share experiences, and support each other
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Start New Discussion
          </button>
          <div className="flex space-x-2">
            <select className="rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Tips</option>
              <option>Questions</option>
              <option>Volunteer</option>
              <option>Support</option>
            </select>
            <select className="rounded-lg border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Replies</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {discussion.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                  <p className="text-gray-600 mb-4">{discussion.preview}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{discussion.author}</span>
                    <span>{new Date(discussion.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="flex items-center text-teal-600">
                      <MessageSquare className="w-5 h-5 mr-1" />
                      <span>{discussion.replies}</span>
                    </div>
                    <span className="text-sm text-gray-500">Replies</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center text-coral-600">
                      <ThumbsUp className="w-5 h-5 mr-1" />
                      <span>{discussion.upvotes}</span>
                    </div>
                    <span className="text-sm text-gray-500">Upvotes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;