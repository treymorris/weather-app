const weather = (() => {
  function convertData(data) {
    const newData = {
      currentLoc: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      today: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    return { ...newData };
  }

  async function getData(city, scale) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&APPID=ae3fc543a832cd1f3a7693a65cdb8c34`,
      { mode: "cors" }
    );
    try {
      if (!response.ok) throw new Error(`${city} not found`);
      const data = convertData(await response.json());
      console.log(data);
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();

export default weather;
