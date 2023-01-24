const API_KEY = "5ee1d1cb2a1e0d46f72da8219d853f10";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
