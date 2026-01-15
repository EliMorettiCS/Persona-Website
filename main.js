console.clear()
evenSecond = false;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function updateClock() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let day = weekday[(currentDate.getDay())]
    let date = currentDate.getMonth()
    if (date == 0){
        date = 1
        date = date+"/"+currentDate.getDate()
    }
    if (date == 13){
        date = 12
        date = date+"/"+currentDate.getDate()
    }
    if (Number(hours) > 12){
        if (evenSecond){
            if (minutes < 10){
                document.getElementById("clock").textContent = Number(hours)-12+":0"+minutes;
            }
            else {
                document.getElementById("clock").textContent = Number(hours)-12+":"+minutes;
            }
        }
        else{
            if (minutes < 10){
                document.getElementById("clock").textContent = Number(hours)-12+" 0"+minutes;
            }
            else{
                document.getElementById("clock").textContent = Number(hours)-12+" "+minutes;
            }
        }
    }
    else {
        if (evenSecond){
            if (minutes < 10){
                document.getElementById("clock").textContent = hours+":0"+minutes;
            }
            else {
                document.getElementById("clock").textContent = hours+":"+minutes;
            }
        }
        else{
            if (minutes<10){
                document.getElementById("clock").textContent = hours+" 0"+minutes;
            }
            else{
                document.getElementById("clock").textContent = hours+" "+minutes;
            }
        }
    }
    if (evenSecond){
        evenSecond = false;
    }
    else {
        evenSecond = true;
    }
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
    document.getElementById("year").textContent = currentDate.getFullYear();
}
updateClock()
setInterval(updateClock, 1000);