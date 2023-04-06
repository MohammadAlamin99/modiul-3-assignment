function time(){
    const myDate = new Date();
    const hours = myDate.getHours();
    const min = myDate.getMinutes();
    const sec = myDate.getSeconds();


    if(hours== "12"){
        var hr=12;
    }
    else if(hours==24){
        var hr=0;
    }
    else{
        var hr = hours%12;
    }

    if(hr<10){
        hr="0" + hr;
    }
    if(min<10){
        min="0" + min;
    }
    if(sec<10){
        sec="0"+sec;
    }

    var ampm = hours<12? "AM":"PM"
    var timed = hr +":" + min+":"+sec+" " +ampm;
    document.getElementById("clock").innerHTML=timed;
}

setInterval(time,1000)