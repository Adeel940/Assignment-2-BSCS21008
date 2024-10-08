import React from 'react';

const ProfileProjects = () => {
  return (
    <section id="Projects" className="mb-5 md:mb-10 lg:mb-10">
      <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4">
        <i className="fas fa-project-diagram"></i> Projects
      </h2>
      <div className="flex flex-wrap lg:mt-10 md:mt-10 mt-5 lg:ml-5 md:ml-5 ml-5">

        <div className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 lg:w-56 lg:h-72 md:w-52 md:h-64 w-36 h-48 drop-shadow-2xl p-2 rounded-xl shadow-2xl transform transition-transform duration-500 cursor-pointer lg:hover:-translate-x-16 md:hover:-translate-x-16 lg:hover:-translate-y-12 md:hover:-translate-y-12 lg:hover:rotate-12 md:hover:rotate-3 lg:-mr-20 md:-mr-14 mr-10 mt-5">
          <div className="lg:p-5 p-1">
            <h2 className="lg:text-2xl md:text-xl font-bold text-white">AI Racing Car</h2>
            <p className="text-white lg:text-lg md:text-md text-sm">Built using Unity 3D</p>
            <p className="text-white lg:text-sm md:text-xs text-xs md:mt-2 lg:mt-3">
              A racing car game where users compete with an AI model on various tracks.
            </p>
          </div>
        </div>
        
    
        <div class="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 lg:w-56 lg:h-72 md:w-52 md:h-64 w-36 h-48 drop-shadow-2xl p-2 rounded-xl shadow-2xl transform transition-transform duration-500 cursor-pointer lg:hover:-translate-x-16 md:hover:-translate-x-16 lg:hover:-translate-y-12 md:hover:-translate-y-12 lg:hover:rotate-12 md:hover:rotate-3 lg:-mr-20 md:-mr-14 mr-10 mt-5">
            <div class="lg:p-5 p-1">
                <h2 class="lg:text-2xl md:text-xl font-bold text-white">Run Riot</h2>
                <p class="text-white lg:text-lg md:text-md text-sm">Built using Unity 3D</p>
                <p class="text-white lg:text-sm md:text-xs text-xs md:mt-2 lg:mt-3">A multiplayer running game where users connect via network to compete.</p>
            </div>
        </div>

        
        <div class="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 lg:w-56 lg:h-72 md:w-52 md:h-64 w-36 h-48 drop-shadow-2xl p-2 rounded-xl shadow-2xl transform transition-transform duration-500 cursor-pointer lg:hover:-translate-x-16 md:hover:-translate-x-16 lg:hover:-translate-y-12 md:hover:-translate-y-12 lg:hover:rotate-12 md:hover:rotate-3 lg:-mr-20 md:-mr-14 mr-10 mt-5">
            <div class="lg:p-5 p-1">
                <h2 class="lg:text-2xl md:text-xl text-lg font-bold text-white">Chess</h2>
                <p class="text-white lg:text-lg md:text-md text-sm">Built using C++ and OOP</p>
                <p class="text-white lg:text-sm md:text-xs text-xs md:mt-2 lg:mt-3">A traditional chess game implementing Object-Oriented Programming principles.</p>
            </div>
        </div>

        
        <div class="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 lg:w-56 lg:h-72 md:w-52 md:h-64 w-36 h-48 drop-shadow-2xl p-2 rounded-xl shadow-2xl transform transition-transform duration-500 cursor-pointer lg:hover:-translate-x-16 md:hover:-translate-x-16 lg:hover:-translate-y-12 md:hover:-translate-y-12 lg:hover:rotate-12 md:hover:rotate-3 lg:-mr-20 md:-mr-14 mr-10 mt-5">
            <div class="lg:p-5 p-1">
                <h2 class="lg:text-2xl md:text-xl font-bold text-white">ShapeShift</h2>
                <p class="text-white lg:text-lg md:text-md text-sm">Built using HTML, CSS, MySQL, C#</p>
                <p class="text-white lg:text-sm md:text-xs text-xs md:mt-2 lg:mt-3">A fitness tracker that helps users monitor their workouts and track fitness progress.</p>
            </div>
        </div>

        
        <div class="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 lg:w-56 lg:h-72 md:w-52 md:h-64 w-36 h-48 drop-shadow-2xl p-2 rounded-xl shadow-2xl transform transition-transform duration-500 cursor-pointer lg:hover:-translate-x-16 md:hover:-translate-x-16 lg:hover:-translate-y-12 md:hover:-translate-y-12 lg:hover:rotate-12 md:hover:rotate-3 lg:-mr-20 md:-mr-14 mr-10 mt-5">
            <div class="lg:p-5 p-1">
                <h2 class="lg:text-2xl md:text-xl font-bold text-white">Weather App</h2>
                <p class="text-white lg:text-lg md:text-md text-sm">Built using HTML, Tailwind, React, Weather Api</p>
                <p class="text-white lg:text-sm md:text-xs text-xs md:mt-2 lg:mt-2">Weather app with different countries options and forecast for to days ahead and one previous day.</p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default ProfileProjects;
