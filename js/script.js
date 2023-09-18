let button = document.querySelector("button")
let resultmin = document.querySelector(".min")
let resultsec = document.querySelector(".sec")

let workTime = 5;
let restTime = 3;
console.log(button)

window.onload =(event)=>
{
    resultmin.textContent = parseInt(workTime/60,10);
    resultsec.textContent = parseInt(workTime % 60, 10);
}

function start_timer()
{

    resultmin.textContent = parseInt(workTime/60,10);
    resultsec.textContent = parseInt(workTime % 60, 10);
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
        resultmin.textContent = parseInt(workTime/60,10);
        resultsec.textContent = parseInt(workTime % 60, 10);
        workTime--;
    }
    else
    {
        if(restTime===0)
            window.location.reload()
        resultmin.textContent = parseInt(restTime/60,10);
        resultsec.textContent = parseInt(restTime % 60, 10);
        restTime--;
    }
    
    
}


