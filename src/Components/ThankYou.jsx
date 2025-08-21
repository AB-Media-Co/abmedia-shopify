import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Mail, ArrowRight, Phone } from 'lucide-react';

const ThankYou = () => {
 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`max-w-2xl w-full text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Meeting Scheduled
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 font-light">
            Thank you for scheduling a consultation with us. We look forward to discussing your project requirements.
          </p>


  
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-black cursor-pointer font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => window.location.href = 'https://abmediaco.com/contact-us/'}
              className="bg-transparent border cursor-pointer border-gray-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-900 hover:border-gray-500 transition-colors duration-200"
            >
              Contact Support
            </button>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default ThankYou;