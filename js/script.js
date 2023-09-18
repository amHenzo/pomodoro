let button = document.querySelector("button")
let resultmin = document.querySelector(".min")
let resultsec = document.querySelector(".sec")

let workTime = 50;
let restTime = 3;
console.log(button)

window.onload =(event)=>
{
   
    refreshtimer(workTime);
}

function start_timer()
{
    refreshtimer(workTime);
    setInterval(decrement, 1000);
    decrement();
    button.onclick = stop;
}
function stop()
{
    window.location.reload()
}

function decrement()
{
    if(workTime !== 0)
    {
       
        refreshtimer(workTime);
        workTime--;
    }
    else
    {
        if(restTime===0)
            window.location.reload()
        
        refreshtimer(restTime);
        restTime--;
    }
    
    
}
function refreshtimer(time)
{
    let timemin = parseInt(time/60,10)  ;
    let timesec = parseInt(time % 60, 10);
    resultmin.textContent =  timemin < 10 ? "0"+ timemin:timemin;
    resultsec.textContent =  timesec < 10 ? "0"+ timesec:timesec;
}


