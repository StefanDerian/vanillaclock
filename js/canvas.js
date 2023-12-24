

const hourHand = document.getElementById('hour-hand')
const minuteHand = document.getElementById('minute-hand')
const secondHand = document.getElementById('second-hand')



function setTimer() {
    let secondDeg = 6;
    let minuteDeg = 6;
    let hourDeg = 30;
    
    
    
    setInterval(function () {
        //for second-hand rotation
        var dt = new Date();
        const hour = dt.getHours() % 12
        const min = dt.getMinutes()
        const sec = dt.getSeconds()

        
        
        secondHand.style.transform = "rotate(" + (secondDeg*sec) + "deg)";
        minuteHand.style.transform = "rotate(" + (minuteDeg*min) + "deg)";
        hourHand.style.transform = "rotate(" + (hourDeg*hour) + "deg)";
    }, 1000);
    setInterval(function () {
        //for minute-hand rotation
        
    }, 60000);
    setInterval(function () {
        //for second-hand rotation
        secondHand.style.transform = "rotate(" + hourDeg + "deg)";
        secondDeg = (secondDeg + 6) % 360
    }, 360000);
}

setTimer()