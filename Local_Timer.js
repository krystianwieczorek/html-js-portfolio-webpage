function timer(){
    
    let today = new Date();
    
    let hours = today.getHours();
    if(hours<10) hours = "0"+hours;
    let minutes = today.getMinutes();
    if(minutes<10) minutes = "0"+minutes;
    let seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;
    
    document.getElementById("clock").innerHTML =  +hours+ ":" +minutes+  ":" +seconds;
    
    setTimeout("timer()",1000);
    
}