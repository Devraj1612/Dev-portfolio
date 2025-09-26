import React from 'react';
import { skills } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
              Data Analyst with expertise in Python, SQL, Power BI, and statistical analysis
            </h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate data professional with experience in developing data-driven 
                solutions, creating interactive dashboards, and transforming raw data into 
                actionable insights. I enjoy solving complex problems and leveraging technology 
                to drive data-informed decision making.
              </p>
              <p>
                My technical skills span across data analysis, visualization, database management, 
                and full-stack development, with a special interest in AI-powered analytics solutions.
              </p>
              <p>
                Beyond academics, I enjoy engaging in activities such as playing cricket, exploring 
                online games, traveling, cooking, and watching movies. I am also passionate about 
                discovering new ideas and innovations that broaden my perspective and creativity.
              </p>
            </div>
            
              {/* Education Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span>SSLC (10th) – Udaya Public School, Bengaluru (2017)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span>Diploma – RJS Polytechnic, Bengaluru (2021)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span>Graduation – Venama Institute of Technology, Bengaluru (2025)</span>
                </li>
              </ul>
            </div>
          </div>
           

          {/* Skills Grid */}
          <div className="space-y-6">
            {skills.map((skillCategory, index) => (
              <div 
                key={skillCategory.category}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <ChevronRight size={20} />
                  {skillCategory.category}
                </h4>
                <ul className="space-y-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
