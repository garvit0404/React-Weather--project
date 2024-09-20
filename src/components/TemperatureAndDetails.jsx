import React from "react";
import { formatToLocalTime } from "../services/weatherServices";
import {
  UilTemperature,
  UilSun,
  UilSunset,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

import "../App.css";

const TemperatureAndDetails = ({ weather }) => {
  return (
    <div>
      <div className="flex  mx-8 rounded-xl text-4xl capitalize font-bold text-black infobg">
        <div className="weather-background rounded-s-xl flex justify-left  "></div>
        <div className="flex justify-center items-center">
          <p className="mx-4 p-1">{weather.details}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
            className="w-20 h-20 items-center"
          />
          <p className="text-4xl">{`${weather.temp.toFixed()}°`}</p>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-evenly
       text-white my-6 cursor-pointer"
      >
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col weather font-semibold text-2xl text-gray-900 rounded-xl px-4 mx-4 py-6">
            <div className="flex items-center">
              <UilTemperature size={25} className="mr-1" />
              <p> Feels Like </p>
            </div>
            <span className="font-medium text-center text-4xl">{`${weather.feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex flex-col font-semibold  weather text-2xl text-gray-800 rounded-xl px-4 mx-4 py-6">
          <div className="flex items-center">
            <UilTear size={25} className="mr-1" />
            Humidity
            </div>
            <span className="font-medium text-center text-4xl">{`${weather.humidity.toFixed()}%`}</span>
          </div>
          <div className="flex flex-col font-semibold  text-2xl weather text-gray-800 rounded-xl px-4 mx-4 py-6">
          <div className="flex items-center">
            <UilWind size={20} className="mr-1" />
            Wind Speed
            </div>
            <span className="font-medium text-center text-2xl">{`${weather.speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-4 cursor-pointer  text-white text-lg py-3">
        <UilSun className=" hover:text-black"/>
        <p className="font-semibold hover:text-black">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-bold">|</p>

        <UilSunset className=" hover:text-yellow-700"/>
        <p className="font-semibold hover:text-black">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-bold">|</p>

        <UilSun className=" hover:text-yellow-300"/>
        <p className="font-semibold hover:text-black">
          High:{" "}
          <span className="font-medium ml-1">{`${weather.temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-bold">|</p>

        <UilSun className=" hover:text-black"/>
        <p className="font-semibold hover:text-black">
          Low:{" "}
          <span className="font-medium ml-1">{`${weather.temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
