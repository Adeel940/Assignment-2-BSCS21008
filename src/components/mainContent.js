import React from 'react';
import About from './about';
import Skills from './Skills';
 import Education from './Education';
// import Experience from './Experience';
// import Projects from './Projects';
// import Hobbies from './Hobbies';
// import Blogs from './Blogs';
// import Feed from './Feed';
// import Contact from './Contact';

const MainContent = () => {
  return (
    <main className="flex-1 bg-white p-10 overflow-y-auto">
      <section id="Home" className="text-center mb-5 md:mb-10 lg:mb-10"></section>
      <About />
       <Skills />
      <Education />
      {/*<Experience />
      <Projects />
      <Hobbies />
      <Blogs />
      <Feed />
      <Contact /> */}
    </main>
  );
};

export default MainContent;
