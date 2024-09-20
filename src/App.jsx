import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherServices";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // console.log({ ...query, units });
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        // console.log(data);
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-gradient-to-r from-gray-500 to-gray-200";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "bg-gradient-to-r from-gray-500 to-gray-200";

    return "bg-gradient-to-r from-gray-700 to-gray-500";
};


  // console.log(weather);

  return (
    <div
      className={` mx-auto md:max-w-screen-md  w-full mt-3 py-4 bg-gradient-to-br  rounded-2xl h-fit shadow-md mb-5 shadow-gray-400 ${formatBackground()}`}
    >
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      <TopButton setQuery={setQuery} />

      {weather && (
        <>
          <TemperatureAndDetails weather={weather} />
          <TimeAndLocation weather={weather} />
          {Object.keys(weather.forecast).map((key, index) => (
            <Forecast
              key={index}
              title={key}
              items={weather.forecast[key]}
              timezone={weather.timezone}
            />
          ))}
          {/* <Forecast title="hourly forecast" items={weather.forecast} /> */}
          {/* <Forecast title="daily forecast" items={weather.daily} /> */}
        </>
      )}
    </div>
  );
}

export default App;
