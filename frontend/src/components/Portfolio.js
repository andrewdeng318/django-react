import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const skills = [
    { 
      category: t('skills.ai.title'),
      items: [
        t('skills.ai.llm'),
        t('skills.ai.generative'),
        t('skills.ai.ml'),
        t('skills.ai.solution'),
        t('skills.ai.nlp')
      ]
    },
    { 
      category: t('skills.software.title'),
      items: [
        t('skills.software.python'),
        t('skills.software.golang'),
        t('skills.software.java'),
        t('skills.software.rust'),
        t('skills.software.javascript'),
        t('skills.software.system'),
        t('skills.software.microservices')
      ]
    },
    { 
      category: t('skills.cloud.title'),
      items: [
        t('skills.cloud.aws'),
        t('skills.cloud.azure'),
        t('skills.cloud.gcp'),
        t('skills.cloud.alibaba'),
        t('skills.cloud.kubernetes'),
        t('skills.cloud.serverless'),
        t('skills.cloud.native')
      ]
    },
    { 
      category: t('skills.leadership.title'),
      items: [
        t('skills.leadership.strategy'),
        t('skills.leadership.team'),
        t('skills.leadership.project'),
        t('skills.leadership.digital'),
        t('skills.leadership.solution')
      ]
    }
  ];

  const experiences = [
    {
      title: t('experience.cto.title'),
      period: '2020 - Present',
      description: t('experience.cto.description'),
      achievements: [
        t('experience.cto.achievement1'),
        t('experience.cto.achievement2'),
        t('experience.cto.achievement3')
      ]
    },
    {
      title: t('experience.stc.title'),
      period: '2015 - 2020',
      description: t('experience.stc.description'),
      achievements: [
        t('experience.stc.achievement1'),
        t('experience.stc.achievement2'),
        t('experience.stc.achievement3')
      ]
    }
  ];

  const projects = [
    {
      title: t('projects.personal.title'),
      description: t('projects.personal.description'),
      technologies: [t('projects.personal.tech1'), t('projects.personal.tech2'), t('projects.personal.tech3'), t('projects.personal.tech4')],
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-playfair">{t('hero.name')}</h1>
            <p className="text-xl mb-4 text-blue-100 font-poppins tracking-wide">{t('hero.title')}</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50 font-inter leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              <a 
                href="https://www.linkedin.com/in/pengfei-deng-a1bb71337/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#0A66C2] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                {t('hero.linkedin')}
              </a>
              <a 
                href="https://github.com/bitdancing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                {t('hero.github')}
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
                {t('hero.twitter')}
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
                {t('hero.youtube')}
              </a>
              <a 
                href="https://www.udemy.com/user/andrew-deng-3/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#A435F0] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.02 14.106V9.894c0-.89.696-1.608 1.556-1.608.859 0 1.556.718 1.556 1.608v4.212c0 .89-.697 1.607-1.556 1.607-.86 0-1.556-.717-1.556-1.607zm4.235 0V9.894c0-.89.696-1.608 1.556-1.608.859 0 1.556.718 1.556 1.608v4.212c0 .89-.697 1.607-1.556 1.607-.86 0-1.556-.717-1.556-1.607zm-8.47 0V9.894c0-.89.696-1.608 1.555-1.608.86 0 1.557.718 1.557 1.608v4.212c0 .89-.697 1.607-1.557 1.607-.859 0-1.556-.717-1.556-1.607z"/>
                </svg>
                {t('hero.udemy')}
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~0194fbcb784199f9b9"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#14A800] font-semibold rounded-lg transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.297 5.281 5.297 2.913 0 5.283-2.38 5.283-5.297V9.24c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                {t('hero.upwork')}
              </a>
            </div>

            {/* Social Links - Second Row */}
            <div className="flex justify-center">
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/danchingbit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                  <a href="https://github.com/bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">GitHub</a>
                  <a href="https://twitter.com/bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Twitter</a>
                  <a href="https://www.youtube.com/@bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">YouTube</a>
                  <a href="https://www.udemy.com/user/danching/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Udemy</a>
                  <a href="https://www.upwork.com/freelancers/~01c0b0e0c0b0b0b0b0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Upwork</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50" id="skills">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t('skills.title')}</h2>
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

      {/* Certifications Section */}
      <section className="section bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <h2 className="text-3xl font-bold mb-12 text-center font-playfair">{t('certifications.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Row 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/safe-devops.png" 
                    alt={t('certifications.safe.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.safe.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.safe.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/azure-fundamentals.png" 
                    alt={t('certifications.azure.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.azure.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.azure.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/terraform-associate.png" 
                    alt={t('certifications.terraform.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.terraform.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.terraform.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/aws-solutions-architect-professional.png" 
                    alt={t('certifications.aws.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.aws.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.aws.org')}</p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/cka.png" 
                    alt={t('certifications.cka.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.cka.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.cka.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/microsoft-certified-professional.png" 
                    alt={t('certifications.microsoft.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.microsoft.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.microsoft.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/aliyun.jpeg" 
                    alt={t('certifications.alibaba.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.alibaba.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.alibaba.org')}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <img 
                    src="/images/gcp.png" 
                    alt={t('certifications.google.title')}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{t('certifications.google.title')}</h3>
                  <p className="text-gray-600 text-center text-sm">{t('certifications.google.org')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gray-100" id="experience">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t('experience.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div key={experience.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.period}</p>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <h4 className="text-lg font-semibold mb-2">{t('experience.achievements')}</h4>
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
          <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
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
                    {t('projects.view')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">{t('consulting.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">{t('consulting.description')}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* AI Solutions */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('consulting.services.ai.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('consulting.services.ai.description')}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('consulting.services.cloud.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('consulting.services.cloud.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('consulting.services.software.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('consulting.services.software.description')}</p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">{t('consulting.cases.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Case Study */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('consulting.cases.ai.title')}</h4>
                    <span className="text-blue-600 font-bold">+40%</span>
                  </div>
                  <p className="text-gray-600">{t('consulting.cases.ai.description')}</p>
                </div>
                <div className="bg-blue-50 px-6 py-4">
                  <div className="flex items-center text-blue-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Improved Accuracy</span>
                  </div>
                </div>
              </div>

              {/* Cloud Case Study */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('consulting.cases.cloud.title')}</h4>
                    <span className="text-green-600 font-bold">-50%</span>
                  </div>
                  <p className="text-gray-600">{t('consulting.cases.cloud.description')}</p>
                </div>
                <div className="bg-green-50 px-6 py-4">
                  <div className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-semibold">Cost Reduction</span>
                  </div>
                </div>
              </div>

              {/* Software Case Study */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('consulting.cases.software.title')}</h4>
                    <span className="text-purple-600 font-bold">3x</span>
                  </div>
                  <p className="text-gray-600">{t('consulting.cases.software.description')}</p>
                </div>
                <div className="bg-purple-50 px-6 py-4">
                  <div className="flex items-center text-purple-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-semibold">Performance Boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="mailto:contact@example.com" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('consulting.cta')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('contact.description')}
            </p>
            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/danchingbit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                <a href="https://github.com/bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">GitHub</a>
                <a href="https://twitter.com/bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Twitter</a>
                <a href="https://www.youtube.com/@bitdancing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">YouTube</a>
                <a href="https://www.udemy.com/user/danching/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Udemy</a>
                <a href="https://www.upwork.com/freelancers/~01c0b0e0c0b0b0b0b0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Upwork</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p> {new Date().getFullYear()} {t('footer.copyright')} Chris Deng. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
