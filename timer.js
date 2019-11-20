
document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('pause').addEventListener('click',pauseTimer);
document.getElementById('stop').addEventListener('click',stopTimer);
document.getElementById('skip').addEventListener('click',skipTimer);
document.getElementById('work').addEventListener('change', updateWorkValue);
document.getElementById('b').addEventListener('change', updateBreakValue);
document.getElementById('lb').addEventListener('change', updateLongBreakValue);

running = false;
worktime = document.getElementById('work').value;
b = document.getElementById('b').value;
lb = document.getElementById('lb').value
seconds = document.getElementById('seconds');
minutes = document.getElementById('minutes');
var interval_timer = 0;
initial_seconds = parseInt(seconds.textContent);
initial_minutes = parseInt(minutes.textContent);
aux = 1;

minutes.innerHTML = (worktime<10)?'0'+parseFloat(worktime):parseFloat(worktime);

//value updates
function updateWorkValue(){
    worktime = document.getElementById('work').value;
    if (aux%2!=0){
        minutes.innerHTML = (worktime<10)?'0'+parseFloat(worktime):parseFloat(worktime);
        seconds.innerHTML = '00';
    }
}

function updateBreakValue(){
    b = document.getElementById('b').value;
    if (aux%2==0 && aux%8!=0){
        minutes.innerHTML = (b<10)?'0'+parseFloat(b):parseFloat(b);
        seconds.innerHTML = '00';
    }
}

function updateLongBreakValue(){
    lb = document.getElementById('lb').value;
    if (aux%8==0){
        minutes.innerHTML = (lb<10)?'0'+parseFloat(lb):parseFloat(lb);
        seconds.innerHTML = '00';
    }
}

//timer functions
function startTimer(){
    if (running == false && (seconds.textContent!='00' || minutes.textContent!='00')){
        running = true;
        interval_timer = setInterval(countdown,1000);
    }
}

function pauseTimer(){
        running = false;
        clearInterval(interval_timer);
}

function stopTimer(){
    clearInterval(interval_timer);
    running = false;
    if (aux%8==0){
        minutes.innerHTML = (lb<10)?'0'+parseFloat(lb):parseFloat(lb);
        seconds.innerHTML = '00';
    }
    else if (aux%2==0){
        minutes.innerHTML = (b<10)?'0'+parseFloat(b):parseFloat(b);
        seconds.innerHTML = '00';
    }
    else{
        minutes.innerHTML = (worktime<10)?'0'+parseFloat(worktime):parseFloat(worktime);
        seconds.innerHTML = '00';
    }
}
function skipTimer(){
    aux++;
    stopTimer();
}

//countdown
function countdown(){
    
    var seconds_value=parseInt(seconds.textContent);
    var minutes_value=parseInt(minutes.textContent);

    if (seconds_value==0 && minutes_value==0){
        aux++;
        stopTimer();
        return;
    }

    else if (seconds_value==0){
        seconds_value=59;
        minutes_value--;
    }
    else{
        seconds_value--;
    }

    seconds.innerHTML = (seconds_value<10)?'0'+parseFloat(seconds_value):parseFloat(seconds_value);
    minutes.innerHTML = (minutes_value<10)?'0'+parseFloat(minutes_value):parseFloat(minutes_value);
}
