fetch("./data.json").then((request) => {
    if(!request.ok) {
        console.log("Something went wrong");
        return null;
    }

    return request.json();
}).then((data) => {
    timeTracker = data;
})

const dailyElement = document.getElementById("daily");
const weeklyElement = document.getElementById("weekly");
const monthlyElement = document.getElementById("monthly");
const numbersElements = document.querySelectorAll(".numbers");

const updateTimeData = (timeframe) => {
  numbersElements.forEach((numbers,index) => {
    const hrsElement = numbers.querySelector(".hrs");
    const previousElement = numbers.querySelector(".previous");

    hrsElement.textContent = `${timeTracker[index].timeframes[timeframe].current}hrs`;

    if(timeframe === "daily") {
        previousElement.textContent = `Yesterday - ${timeTracker[index].timeframes[timeframe].previous}hrs`;
    }
    else if(timeframe === "weekly") {
        previousElement.textContent = `Last week - ${timeTracker[index].timeframes[timeframe].previous}hrs`;
    }
    else if(timeframe === "monthly") {
        previousElement.textContent = `Last month - ${timeTracker[index].timeframes[timeframe].previous}hrs`;
    }
    
  });
}

dailyElement.addEventListener("click", () => updateTimeData("daily"));
weeklyElement.addEventListener("click", () => updateTimeData("weekly"));
monthlyElement.addEventListener("click", () => updateTimeData("monthly"));
  
