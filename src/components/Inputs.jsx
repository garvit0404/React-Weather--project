import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationIcon from '@mui/icons-material/LocationOn';

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-evenly my-6">
      <div className="flex flex-row w-3/4 items-center justify-center mx-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl mx-6 p-2 rounded-md w-full font-medium focus:outline-black capitalize placeholder:lowercase"
          placeholder="Search City..."
          
        />
        <SearchIcon
          size={28}
          className="text-white mx-4  cursor-pointer transition ease-out hover:scale-150 hover:text-black"
          onClick={handleSearchClick}
        />
        <LocationIcon 
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125 hover:text-black"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center mx-4">
        <button
          name="metric"
          className="text-2xl mx-2  text-white font-semibold transition ease-out hover:scale-125 hover:text-black"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-2xl text-black font-semibold mx-1">|</p>
        <button
          name="imperial"
          className="text-2xl mx-1 text-white font-semibold transition ease-out hover:scale-125 hover:text-black"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
