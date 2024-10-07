// IconsList.js
import React from 'react';

const IconsList = () => {
  const icons = [
    { className: 'fa-solid fa-house', name: 'House' },
    { className: 'fa-solid fa-user', name: 'User' },
    { className: 'fa-solid fa-envelope', name: 'Envelope' },
    { className: 'fa-solid fa-phone', name: 'Phone' },
    { className: 'fa-solid fa-bell', name: 'Bell' },
    { className: 'fa-solid fa-car', name: 'Car' },
    { className: 'fa-solid fa-cloud', name: 'Cloud' },
    { className: 'fa-solid fa-heart', name: 'Heart' },
    { className: 'fa-solid fa-book', name: 'Book' },
    { className: 'fa-solid fa-camera', name: 'Camera' },
    { className: 'fa-solid fa-chart-line', name: 'Chart Line' },
    { className: 'fa-solid fa-code', name: 'Code' },
    { className: 'fa-solid fa-coffee', name: 'Coffee' },
    { className: 'fa-solid fa-compass', name: 'Compass' },
    { className: 'fa-solid fa-database', name: 'Database' },
    { className: 'fa-solid fa-download', name: 'Download' },
    { className: 'fa-solid fa-edit', name: 'Edit' },
    { className: 'fa-solid fa-file', name: 'File' },
    { className: 'fa-solid fa-flag', name: 'Flag' },
    { className: 'fa-solid fa-globe', name: 'Globe' },
    { className: 'fa-solid fa-key', name: 'Key' },
    { className: 'fa-solid fa-lock', name: 'Lock' },
    { className: 'fa-solid fa-map', name: 'Map' },
    { className: 'fa-solid fa-music', name: 'Music' },
    { className: 'fa-solid fa-paint-brush', name: 'Paint Brush' },
    { className: 'fa-solid fa-paper-plane', name: 'Paper Plane' },
    { className: 'fa-solid fa-pen', name: 'Pen' },
    { className: 'fa-solid fa-phone-alt', name: 'Phone Alt' },
    { className: 'fa-solid fa-plane', name: 'Plane' },
    { className: 'fa-solid fa-plug', name: 'Plug' },
    { className: 'fa-solid fa-print', name: 'Print' },
    { className: 'fa-solid fa-question-circle', name: 'Question Circle' },
    { className: 'fa-solid fa-rocket', name: 'Rocket' },
    { className: 'fa-solid fa-search', name: 'Search' },
    { className: 'fa-solid fa-shield-alt', name: 'Shield' },
    { className: 'fa-solid fa-shopping-cart', name: 'Shopping Cart' },
    { className: 'fa-solid fa-signal', name: 'Signal' },
    { className: 'fa-solid fa-star', name: 'Star' },
    { className: 'fa-solid fa-sun', name: 'Sun' },
    { className: 'fa-solid fa-table', name: 'Table' },
    { className: 'fa-solid fa-tag', name: 'Tag' },
    { className: 'fa-solid fa-thumbtack', name: 'Thumbtack' },
    { className: 'fa-solid fa-trash', name: 'Trash' },
    { className: 'fa-solid fa-tree', name: 'Tree' },
    { className: 'fa-solid fa-trophy', name: 'Trophy' },
    { className: 'fa-solid fa-truck', name: 'Truck' },
    { className: 'fa-solid fa-umbrella', name: 'Umbrella' },
    { className: 'fa-solid fa-user-friends', name: 'User Friends' },
    { className: 'fa-solid fa-video', name: 'Video' },
    { className: 'fa-solid fa-wallet', name: 'Wallet' },
    { className: 'fa-solid fa-wifi', name: 'Wifi' },
    { className: 'fa-solid fa-wrench', name: 'Wrench' },
    { className: 'fa-solid fa-anchor', name: 'Anchor' },
    { className: 'fa-solid fa-apple-alt', name: 'Apple' },
    { className: 'fa-solid fa-atom', name: 'Atom' },
    { className: 'fa-solid fa-battery-full', name: 'Battery Full' },
    { className: 'fa-solid fa-bolt', name: 'Bolt' },
    { className: 'fa-solid fa-bug', name: 'Bug' },
    { className: 'fa-solid fa-bullhorn', name: 'Bullhorn' },
    { className: 'fa-solid fa-bus', name: 'Bus' },
    { className: 'fa-solid fa-calendar-alt', name: 'Calendar' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl text-center font-semibold mb-8">Font Awesome Icons</h2>
      <div className="grid grid-cols-3 gap-8">
        {icons.map((icon, index) => (
          <div key={index} className="text-center">
            <i className={`${icon.className} text-4xl text-gray-700 mb-2`}></i>
            <p className="text-lg text-gray-800">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsList;
