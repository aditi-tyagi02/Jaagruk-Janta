import React, { useState } from 'react';
import { Shield, ArrowRight, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "Do you have a stockpile of essential supplies for emergencies?",
    options: [
      "Yes, I have supplies for more than a month",
      "Yes, I have supplies for about 2 weeks",
      "Yes, I have supplies for a few days",
      "No, I don't have any emergency supplies"
    ]
  },
  {
    id: 2,
    question: "Does your organization have a contingency plan for pandemics?",
    options: [
      "Yes, we have a comprehensive plan that's regularly updated",
      "Yes, we have a basic plan",
      "We're working on developing a plan",
      "No, we don't have a plan"
    ]
  },
  {
    id: 3,
    question: "Are you connected with local community support groups?",
    options: [
      "Yes, actively involved",
      "Yes, but not very active",
      "I know about them but not connected",
      "No, not aware of any"
    ]
  },
  {
    id: 4,
    question: "Do you have access to reliable healthcare facilities?",
    options: [
      "Yes, multiple options nearby",
      "Yes, one facility nearby",
      "Yes, but it's far",
      "No reliable access"
    ]
  },
  {
    id: 5,
    question: "How often do you update your emergency contact list?",
    options: [
      "Every few months",
      "Yearly",
      "Rarely",
      "Never maintained one"
    ]
  }
];

const ResiliencyIndex = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const totalPoints = answers.reduce((acc, answer) => acc + (3 - answer), 0);
    const maxPoints = questions.length * 3;
    return Math.round((totalPoints / maxPoints) * 100);
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return [
        "Share your preparedness strategies with your community",
        "Consider becoming a community preparedness mentor",
        "Regular review and update of your emergency plans"
      ];
    } else if (score >= 50) {
      return [
        "Build up your emergency supply kit",
        "Connect with local community support groups",
        "Create a detailed family emergency plan"
      ];
    } else {
      return [
        "Start building a basic emergency supply kit",
        "Connect with nearby NGOs for support and guidance",
        "Attend community awareness workshops",
        "Create an emergency contact list"
      ];
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations(score);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Resiliency Score</h1>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-teal-600">{score}%</span>
                </div>
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#008080"
                    strokeWidth="8"
                    strokeDasharray={`${score * 3.77} 377`}
                  />
                </svg>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
              <div className="grid gap-4">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <p className="text-gray-800">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResults(false);
                }}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-teal-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-teal-600 hover:bg-teal-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <div className="flex items-center text-gray-600">
              {currentQuestion + 1} / {questions.length}
            </div>
            {answers[currentQuestion] !== undefined && (
              <button
                onClick={() => handleAnswer(answers[currentQuestion])}
                className="flex items-center text-teal-600 hover:text-teal-700"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResiliencyIndex;