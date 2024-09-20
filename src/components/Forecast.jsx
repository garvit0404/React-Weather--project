import React from "react";
import { DateTime } from "luxon";
import "../App.css";

// import { iconUrLFromCode } from "../services/weatherServices";

const Forecast = ({ title, items, timezone }) => {
  // const { weather_data } = items;
  return (
    <div>
      <div className="flex items-center justify-start my-6 cursor-pointer">
        <p className="text-black text-lg  mx-4 font-semibold uppercase "> {title}</p>
      </div>
      {/* <hr className="my-4 mx-4 bg-black " /> */}
      <div className="flex flex-container flex-row py-4 items-center justify-between text-black overflow-auto gap-5 m-4  rounded-xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-semibold text-md text-nowrap mx-4 ">
              {DateTime.fromSeconds(item.dt)
                .setZone(timezone)
                .toFormat("hh:mm a")}
            </p>
            <p className="font-medium text-lg "> {item.weather[0].main}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="sun image"
              className="w-12 my-1"
            />
            <p className="font-semibold"> {`${item.main.temp}°C`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
