let button = document.querySelector("button")
let resultmin = document.querySelector(".min")
let resultsec = document.querySelector(".sec")
let txtworking = document.querySelectorAll(".travail > p")
let inputWork = document.querySelector('[name ="inputWork"]')
let inputRes = document.querySelector('[name ="inputRes"]')

// testing if we get the right <p> array
//console.log(txtworking[0].textContent = "Teest")
let isWorking = true;
// default time in sec 
let workTime =1500;
let restTime =300;
let idInterval =0;

window.onload =(event)=>
{
    // if there is data saved load it 
    if("saveWorkSec" in localStorage)
    {
        let saveWork = localStorage.getItem("saveWorkSec");
        let saveRes = localStorage.getItem("saveResSec");

        workTime = parseInt(saveWork);
        restTime = parseInt(saveRes);
        inputWork.value = parseInt(workTime/60);
        inputRes.value  = parseInt(restTime/60);
    }
    refreshtimer(workTime);
}

function start_timer()
{


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
    // save time
    
    
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
        txtworking[0].style.color = 'limegreen'
        txtworking[1].style.color = 'white'
    }
    else
    {
        txtworking[0].style.color = 'white'
        txtworking[1].style.color = 'limegreen'
    }
    let timemin = parseInt(time/60,10)  ;
    let timesec = parseInt(time % 60, 10);

    //get a clock who always display atleast 4 digit 
    resultmin.textContent =  timemin < 10 ? "0"+ timemin:timemin;
    resultsec.textContent =  timesec < 10 ? "0"+ timesec:timesec;
}

/**
 * know if inputs are goods
 * 
 * @param {time} d time who will get display
 */
function isInputok()
{

    inputWork.value = inputWork.value.replace(/[^\d]/,'');
    inputRes.value = inputRes.value.replace(/[^\d]/,'');
    
    workTime = inputWork.value*60;
    restTime = inputRes.value*60;
    localStorage.setItem("saveWorkSec",workTime);
    localStorage.setItem("saveResSec",restTime);

    refreshtimer(workTime);
    
}

