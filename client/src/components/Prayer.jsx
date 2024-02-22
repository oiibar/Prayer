import React, { useEffect, useState } from "react";

function Prayer({ state }) {
  const [currentTime, setCurrentTime] = useState("");

  // Get current date
  const currentDate = new Date();

  // Define options for formatting the date
  const dayOptions = { weekday: "long" };
  const dateOptions = { day: "numeric" };
  const monthOptions = { month: "long" };
  const yearOptions = { year: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric" };

  // Format each part of the date
  const dayOfWeek = currentDate.toLocaleDateString("en-US", dayOptions);
  const dayOfMonth = currentDate.toLocaleDateString("en-US", dateOptions);
  const month = currentDate.toLocaleDateString("en-US", monthOptions);
  const year = currentDate.toLocaleDateString("en-US", yearOptions);

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(currentDate.toLocaleTimeString("en-US", timeOptions));
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentDate, timeOptions]);

  return (
    <>
      <div className="absolute top-5 right-5 text-white text-center text-xs">
        <p>{dayOfWeek}</p>
        <p>
          {dayOfMonth} {month}, {year}
        </p>
        <p>{currentTime}</p>
      </div>
      <div className="bg-black p-5 mb-5 rounded-lg font-mont text-white text-center flex flex-col">
        <div className="flex justify-between mb-4">
          <p className="mr-24">Fajr</p>
          <p className="font-bold">{state.Fajr}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Sunrise</p> <p className="font-bold">{state.Sunrise}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Dhuhr</p> <p className="font-bold">{state.Dhuhr}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Asr</p> <p className="font-bold">{state.Asr}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Maghrib</p> <p className="font-bold">{state.Maghrib}</p>
        </div>
        <div className="flex justify-between">
          <p>Isha</p> <p className="font-bold">{state.Isha}</p>
        </div>
      </div>

      <div className="bg-green p-3 rounded-lg font-mont text-white text-center flex">
        <div className="flex justify-between">
          <p className="mr-24">Fajr</p>
          <p className="font-bold">00:00:00</p>
        </div>
      </div>
    </>
  );
}

export default Prayer;
