
import React from 'react';
import MenuItem from './components/menu';
import image from './m1.jpg'; 

const MainMenu = () => {
  const menuItems = [
    { name: 'Magnam Tiste', description: 'Lorem, deren, trataro, filede, nerada', price: '5.95', image },
    { name: 'Aut Luia', description: 'Lorem, deren, trataro, filede, nerada', price: '14.95', image },
    { name: 'Est Eligendi', description: 'Lorem, deren, trataro, filede, nerada', price: '8.95', image },
    { name: 'Quis Autem', description: 'Lorem, deren, trataro, filede, nerada', price: '9.95', image },
    { name: 'Doloribus', description: 'Lorem, deren, trataro, filede, nerada', price: '12.95', image },
    { name: 'Consectetur', description: 'Lorem, deren, trataro, filede, nerada', price: '10.95', image },
  ];

  return (
    <div className="container mx-auto my-8">
        
      <h2 className="text-4xl text-center font-semibold text-red-600 mb-8">Starters</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
