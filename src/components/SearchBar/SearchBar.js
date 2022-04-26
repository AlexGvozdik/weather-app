import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedCityWeather } from "../../redux/weather/weatherSelector";
import { fetchWeatherAction, reset } from "../../redux/weather/weatherSlicer";
import { addCity } from "../../redux/cityCard/citySlicer";
import s from "./SearchBar.module.css";
import a from "../Main/Main.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCities } from "../../redux/cityCard/citySelector";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchedCity = useSelector(getSearchedCityWeather);
  const ourCities = useSelector(getCities);
  const [city, setCity] = useState("");

  const onHandleChange = (e) => {
    const city = e.target.value;
    setCity(city.trim());
  };
  const onHandleKeyPress = (e) => {
    if (e.key === "Enter" && city.length > 3) {
      dispatch(fetchWeatherAction(city));
      setCity("");
    } else if (e.key === "Enter" && city.length < 3) {
      toast.error("Please enter correct data!!!");
      setCity("");
    }
  };
  const onHandleSearch = () => {
    const isThere = ourCities.includes(
      city[0].toUpperCase() + city.slice(1).toLowerCase()
    );
    if (isThere) {
      toast.error("This city is already in your list!!!!");
      setCity("");
      return;
    } else if (city.length < 3) {
      toast.error("Please enter correct data!!!");
      setCity("");
      return;
    }
    dispatch(fetchWeatherAction(city));
    setCity("");
  };

  const { weather } = searchedCity;

  return (
    <>
      <div className={s.searchbar}>
        <input
          onKeyPress={onHandleKeyPress}
          className={s.searchInput}
          placeholder="Enter city"
          value={city}
          onChange={onHandleChange}
        />
        <button className={s.searchBtn} onClick={onHandleSearch}>
          Search
        </button>
      </div>
      {weather ? (
        <div
          className={`${a.item} item`}
          style={{ margin: "0 auto", height: "410px" }}
        >
          <p className={a.cityName}>
            {weather.name} {weather.sys.country}
          </p>
          <p className={a.cityDescr}>{weather.weather[0].description}</p>
          <div className={s.wrapperBtn}>
            <button
              className={a.cityBtn}
              onClick={() => {
                dispatch(addCity(weather.name));
                dispatch(reset());
                toast.success("The city was added!!!");
              }}
            >
              add to your countries
            </button>
          </div>
        </div>
      ) : (
        <h2 className={s.suggestion}>make a search</h2>
      )}
    </>
  );
}
