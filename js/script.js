let button = document.querySelector("button")
let resultmin = document.querySelector(".min")
let resultsec = document.querySelector(".sec")
let txtworking = document.querySelectorAll(".travail > p")

// testing if we get the right <p> array
//console.log(txtworking[0].textContent = "Teest")
let isWorking = true;

let workTime =1500;
let restTime =300;
let idInterval =0;
console.log(button)

window.onload =(event)=>
{
    refreshtimer(workTime);
}

function start_timer()
{
    workTime = 1500;
    restTime = 300;

    refreshtimer(workTime);
    // so it dosen't start mutiple chrono a the same time
    clearInterval(idInterval);
    idInterval = setInterval(decrement, 1000);
    decrement();
    // set the function stop to the button to start only one time 
    button.onclick = stop;
}
function stop()
{
    window.location.reload()
}


/**
 * if we are in working time decrement and display
 * else do the same for resting time
 *
 */
function decrement()
{
    if(workTime !== 0)
    {
        isWorking = true;
        refreshtimer(workTime);
        workTime--;
    }
    else
    {
        if(restTime===0)
            start_timer()
        else{  
            isWorking=false;
            refreshtimer(restTime);
            restTime--;
        }
    
    }
    
    
}

/**
 * refresh the view and display if you are working or not 
 * 
 * @param {time} d time who will get display
 */
function refreshtimer(time)
{
    if(isWorking)
    {
        txtworking[0].style.color = 'green'
        txtworking[1].style.color = 'black'
    }
    else
    {
        txtworking[0].style.color = 'black'
        txtworking[1].style.color = 'green'
    }
    let timemin = parseInt(time/60,10)  ;
    let timesec = parseInt(time % 60, 10);
    resultmin.textContent =  timemin < 10 ? "0"+ timemin:timemin;
    resultsec.textContent =  timesec < 10 ? "0"+ timesec:timesec;
}


