import React from 'react';

const Skills = () => {
  return (
    <section id="Skills" className="md-5 md:mb-10 lg:mb-10">
      <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4">
        <i className="fas fa-laptop-code"></i> Skills
      </h2>
      <ul className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 md:text-lg lg:text-lg">
        <li><i className="fas fa-check-circle text-green-500"></i> Unity</li>
        <li><i className="fas fa-check-circle text-green-500"></i> Maya</li>
        <li><i className="fas fa-check-circle text-green-500"></i> C++</li>
        <li><i className="fas fa-check-circle text-green-500"></i> Microsoft Office</li>
        <li><i className="fas fa-check-circle text-green-500"></i> Make Human</li>
        <li><i className="fas fa-check-circle text-green-500"></i> HTML/CSS</li>
        <li><i className="fas fa-check-circle text-green-500"></i> React.js</li>
        <li><i className="fas fa-check-circle text-green-500"></i> Next.js</li>
        <li><i className="fas fa-check-circle text-green-500"></i> Ruby on Rails</li>
        <li><i className="fas fa-check-circle text-green-500"></i> MySQL</li>
      </ul>
    </section>
  );
};

export default Skills;
