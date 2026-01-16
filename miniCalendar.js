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
    if (evenSecond){
        evenSecond = false;
    }
    else {
        evenSecond = true;
    }
    if (clockMode == 1){
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
    }
    if (clockMode == 2){
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
    if (clockMode == 3){
        if (hours >= 4 && hours <= 8){ //4:00 AM - 8:00 AM
            document.getElementById("clock").textContent = "Early Morning";
        }
        if (hours >= 9 && hours <= 15){ //9:00 AM - 3:00 PM
            document.getElementById("clock").textContent = "School Time";
        }
        if (hours >= 16 && hours <= 19){ //3:00 PM - 7:00 PM
            document.getElementById("clock").textContent = "After School";
        }
        if (hours >= 20 && hours <= 22){ //7:00 PM - 10:00 PM
            document.getElementById("clock").textContent = "Night";
        }
        if (hours >= 23 && hours <= 3){ //10:00 PM - 3:00 AM
            document.getElementById("clock").textContent = "Late Night";
        }
    }
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
    document.getElementById("year").textContent = currentDate.getFullYear();
}
clockMode = 1 // 12Hr, 24Hr, Classic
document.getElementById("clock").onclick = function() {
    if (clockMode == 1){
        clockMode = 2;
        updateClock()
        console.log("Current Clock Mode Is "+clockMode)
        document.getElementById("clock").style.setProperty("font-size","5vw")
        document.getElementById("clock").style.setProperty("transform","translate(10vw, -6.5vw)")
    }
    else if (clockMode == 2){
        clockMode = 3;
        updateClock()
        console.log("Current Clock Mode Is "+clockMode)
        document.getElementById("clock").style.setProperty("font-size","4vw")
        document.getElementById("clock").style.setProperty("transform","translate(1vw, -5.5vw)")
    }
    else if (clockMode == 3){
        clockMode = 1;
        updateClock()
        console.log("Current Clock Mode Is "+clockMode)
        document.getElementById("clock").style.setProperty("font-size","5vw")
        document.getElementById("clock").style.setProperty("transform","translate(10vw, -6.5vw)")
    }
}
updateClock()
setInterval(updateClock, 1000);