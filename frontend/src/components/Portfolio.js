import React from 'react';

const Portfolio = () => {
  const skills = [
    { 
      category: 'AI & Machine Learning',
      items: [
        'Large Language Models (LLMs)',
        'Generative AI',
        'Machine Learning',
        'AI Solution Architecture',
        'Natural Language Processing'
      ]
    },
    { 
      category: 'Software Development',
      items: [
        'Python/Django/FastAPI',
        'Golang/Gin/Fiber',
        'Java/Spring Boot',
        'Rust/WebAssembly',
        'JavaScript/React/Node.js',
        'System Architecture',
        'Microservices'
      ]
    },
    { 
      category: 'Cloud Computing',
      items: [
        'AWS (Advanced)',
        'Azure (Professional)',
        'Google Cloud Platform',
        'Alibaba Cloud',
        'Kubernetes/Docker',
        'Serverless Architecture',
        'Cloud Native Development'
      ]
    },
    { 
      category: 'Leadership & Management',
      items: [
        'Technical Strategy',
        'Team Leadership',
        'Project Management',
        'Digital Transformation',
        'Solution Design'
      ]
    }
  ];

  const experiences = [
    {
      title: 'Chief Technology Officer',
      period: '2020 - Present',
      description: 'Leading technical strategy and digital transformation initiatives, overseeing AI implementation and system architecture.',
      achievements: [
        'Led development of AI-powered solutions',
        'Established DevOps practices',
        'Improved system performance by 200%'
      ]
    },
    {
      title: 'Senior Technical Consultant',
      period: '2015 - 2020',
      description: 'Provided expert consultation on AI integration and system optimization for enterprise clients.',
      achievements: [
        'Successfully delivered 20+ large-scale projects',
        'Reduced operational costs by 40%',
        'Implemented innovative AI solutions'
      ]
    }
  ];

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio website built with React and Django',
      technologies: ['React', 'Tailwind CSS', 'Django', 'Python'],
      link: '#',
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/images/profile.jpg" 
                alt="Chris Deng"
                className="rounded-full w-48 h-48 object-cover object-[center_5%] mx-auto border-4 border-white shadow-xl"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair">Chris Deng</h1>
            <p className="text-xl mb-4 text-blue-100 font-poppins tracking-wide">AI & Technology Leader</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50 font-inter leading-relaxed">
              With over 14 years of IT industry experience, specializing in AI, LLMs, and digital transformation. 
              Expert in implementing cutting-edge technologies to drive business innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/pengfei-deng-a1bb71337/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#0A66C2] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/bitdancing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://twitter.com/bitdancing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#1DA1F2] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
              <a 
                href="https://www.youtube.com/@bitdancing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#FF0000] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a 
                href="https://www.udemy.com/user/andrew-deng-3/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#A435F0] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.02 14.106V9.894c0-.89.696-1.608 1.556-1.608.859 0 1.556.718 1.556 1.608v4.212c0 .89-.697 1.607-1.556 1.607-.86 0-1.557-.717-1.557-1.607zm4.235 0V9.894c0-.89.696-1.608 1.556-1.608.859 0 1.556.718 1.556 1.608v4.212c0 .89-.697 1.607-1.556 1.607-.86 0-1.556-.717-1.556-1.607zm-8.47 0V9.894c0-.89.696-1.608 1.555-1.608.86 0 1.557.718 1.557 1.608v4.212c0 .89-.697 1.607-1.557 1.607-.859 0-1.556-.717-1.556-1.607z"/>
                </svg>
                Udemy
              </a>
              <a 
                href="mailto:bitdanchingchina@gmail.com" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#0A66C2] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50" id="skills">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gray-100" id="experience">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div key={experience.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.period}</p>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-100" id="projects">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-600 hover:text-blue-700 font-medium">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="space-y-4">
              <p className="flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:bitdanchingchina@gmail.com" className="text-blue-600 hover:text-blue-700">
                  bitdanchingchina@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p> {new Date().getFullYear()} Chris Deng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
