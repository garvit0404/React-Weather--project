import React from 'react';

function TopButton({ setQuery }) {
  const cities = [
    { id: 1, title: "Mumbai" },
    { id: 2, title: "Bengaluru" },
    { id: 3, title: "Amritsar" },
    { id: 4, title: "Chennai" },
    { id: 5, title: "Lucknow" },
  ];

  return (
    <div className="flex items-center justify-evenly my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-xl hover:bg-gray-600 hover:rounded-md p-1 font-semibold"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
