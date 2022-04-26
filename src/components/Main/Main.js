import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "../../redux/weather/weatherSelector";
import { v4 as uuidv4 } from "uuid";
import { removeCity } from "../../redux/cityCard/citySlicer";
import { getCities } from "../../redux/cityCard/citySelector";
import { converter } from "../../utils/helpers";
import axios from "axios";
import s from "./Main.module.css";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const dispatch = useDispatch();
  const countries = useSelector(getCities);
  const isLoading = useSelector(getIsLoading);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const newCities = [];
    for (let i = 0; i < countries.length; i++) {
      cities.forEach((city) => {
        if (city.name === countries[i]) {
          newCities.push(city);
        }
      });
    }

    setCities(newCities);
    countries?.forEach((country) => {
      axios
        .get(
          `/weather?q=${country}&appid=d0aef4da9ac1a34e09e4ce9ff137ae24&units=imperial`
        )
        .then(({ data }) => {
          console.log(data);
          setCities((pr) => {
            if (pr && pr?.find((c) => c.name === country)) {
              return pr;
            }
            return [...pr, data];
          });
        });
    });
  }, [countries]);

  async function updateCity({ lat, lon, name }) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d0aef4da9ac1a34e09e4ce9ff137ae24&units=imperial`
    );

    setCities((prev) => {
      return prev.map((city) => {
        if (city.name === name) {
          return data;
        } else {
          return city;
        }
      });
    });
  }

  const sortedCities = [];
  if (countries.length === cities.length) {
    countries.forEach((c) => {
      sortedCities.push(cities.find(({ name }) => name === c));
    });
  }

  return (
    <>
      <h3 className={s.heading}>Your favourite countries</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.wrapper}>
          {sortedCities.length > 0 ? (
            <ul className={`${s.grid} grid`}>
              {sortedCities.map((c) => (
                <li className={`${s.item} item`} key={uuidv4()}>
                  <p className={s.cityName}>
                    {c.name} {c.sys.country}
                  </p>
                  <p className={s.citySun}>{c.dt}</p>
                  <p className={s.cityTemp}>
                    {Math.floor(converter(c.main.temp))} {"°C"}
                  </p>
                  <p className={s.cityDescr}>{c.weather[0].description}</p>
                  <div className={s.wrapperBtn}>
                    <Link
                      className={s.cityBtn}
                      state={{
                        lat: c.coord.lat,
                        lon: c.coord.lon,
                      }}
                      to={`/details/${c.name}`}
                    >
                      Details
                    </Link>
                    <button
                      className={s.cityBtn}
                      onClick={() => {
                        dispatch(removeCity(c.name));
                        toast.success("REMOVED!!!");
                      }}
                    >
                      remove
                    </button>
                    <button
                      className={s.cityBtn}
                      onClick={() => {
                        updateCity({
                          lon: c.coord.lon,
                          lat: c.coord.lat,
                          name: c.name,
                        });
                        toast.success("UPDATED!!!");
                      }}
                    >
                      update
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h4 className={s.emptyList}>No favourites HERE</h4>
          )}
        </div>
      )}
    </>
  );
}
