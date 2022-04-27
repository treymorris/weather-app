const display = (() => {

    function setData(data) {
        if (!data) return;
    console.log(data)
        const currentLoc = document.getElementById("current");
        const today = document.getElementById("today");
        const feelsLike = document.getElementById("feels-like");
        const humidity = document.getElementById("humidity");
        const temp = document.getElementById("temp");
        const icon = document.getElementById("icon");
    
        currentLoc.textContent = `${data.newData.currentLoc}`;
        today.textContent = `${data.newData.description}`;
        feelsLike.textContent = Math.round(`${data.newData.feelsLike}`);
        humidity.textContent = `${data.newData.humidity}`;
        temp.textContent = Math.round(`${data.newData.temp}`);
        icon.src = `${data.newData.icon}`;
    
    }

    return { setData };

})();
  
export default display;