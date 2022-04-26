import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { converter, getTime } from "../../utils/helpers";
import s from "./Details.module.css";

export default function Details() {
  const { state } = useLocation();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${state.lat}&lon=${state.lon}&appid=d0aef4da9ac1a34e09e4ce9ff137ae24`
      )
      .then(({ data }) => setWeather(data));
  }, []);
  console.log("weather", weather);

  return weather ? (
    <div className={`${s.item}`}>
      <p className={s.nameDetails}>
        {weather.city.name} {weather.city.country}
      </p>
      <p className={s.populDetails}>population:{weather.city.population}</p>
      <ul
        className={s.listTemp}
        style={{ display: "flex", position: "relative", margin: "0 auto 90px" }}
      >
        {weather.list.slice(0, 5).map((item) => (
          <li
            className={s.listItemTemp}
            key={item.dt_txt}
            style={{
              position: "absolute",
              padding: "2px",
              border: "1px solid white",
              bottom: `${converter(item.main.temp)}px`,
            }}
          >
            <div className={s.temp}>
              {Math.floor(converter(item.main.temp))} {"°C"}
            </div>
            <div className={s.date}>{getTime(item.dt_txt)}</div>
          </li>
        ))}
      </ul>
      <Link className={s.backDetails} to="/">
        Back
      </Link>
    </div>
  ) : (
    <p>Not found</p>
  );
}
