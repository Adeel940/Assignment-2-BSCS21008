import React from 'react';

const Hobbies = () => {
  return (
    <section id="Hobbies" className="mb-5 md:mb-10 lg:mb-10">
      <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4">
        <i className="fas fa-table-tennis"></i> Hobbies
      </h2>
      <ul className="md:text-lg lg:text-lg leading-relaxed text-gray-600">
        <li><strong>Table Tennis</strong></li>
        <li><strong>Traveling</strong></li>
        <li><strong>Gyming</strong></li>
      </ul>
    </section>
  );
};

export default Hobbies;
