const display = (() => {
  function setData(data) {
    if (!data) return;
    console.log(data);

    const currentLoc = document.getElementById("current");
    const today = document.getElementById("today");
    const feelsLike = document.getElementById("feels-like");
    const humidity = document.getElementById("humidity");
    const temp = document.getElementById("temp");
    const icon = document.getElementById("icon");

    currentLoc.textContent = `${data.currentLoc}`;
    today.textContent = `${data.today}`;
    feelsLike.textContent = Math.round(`${data.feelsLike}`);
    humidity.textContent = `${data.humidity}`;
    temp.textContent = Math.round(`${data.temp}`);
    icon.src = `${data.icon}`;
  }

  return { setData };
})();

export default display;
