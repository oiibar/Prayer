import React, { useEffect, useState } from "react";
import Prayer from "./components/Prayer";
import getPrayerData from "./services/api.service";

const cities = ["astana", "almaty", "oskemen", "shymkent"];

function App() {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDaytime, setIsDaytime] = useState(true);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    setIsDaytime(currentTime >= 6 * 60 && currentTime < 18 * 60);

    const getAllInformation = async () => {
      try {
        const data = await getPrayerData(selectedCity);
        setState(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getAllInformation();
  }, [selectedCity]);

  const backgroundClass = isDaytime ? "bg-day" : "bg-night";

  return (
    <div
      className={`relative h-screen text-black flex items-center flex-col justify-center bg-no-repeat bg-cover ${backgroundClass}`}
    >
      <div className="mb-4">
        <label htmlFor="city" className="mr-2">
          Select City:
        </label>
        <select
          id="city"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
          value={selectedCity}
          className="p-2 border rounded"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? <></> : <Prayer state={state} />}
    </div>
  );
}

export default App;
