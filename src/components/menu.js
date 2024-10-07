import React from 'react';

const MenuItem = ({ image, name, description, price }) => {
  return (
    <div className="text-center p-4">
      <img src={image} alt={name} className="w-52 h-48 mx-auto rounded-md object-cover" />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <p className="text-red-600 font-bold mt-2">${price}</p>
    </div>
  );
};

export default MenuItem;
