function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if(hr < 12){
        document.getElementById("wish").innerHTML = "good morning";
     }
     else if(hr >= 12 && hr<16){
        document.getElementById("wish").innerHTML = "good afternoon";
         
     }
     else if(hr >= 16 && hr< 20) {
        document.getElementById("wish").innerHTML = "good evening";
         
     }
     else{
        document.getElementById("wish").innerHTML = "good night";

     }
    per = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

   
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + per;

    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    var time = setTimeout(function(){ startTime() }, 500);
    
}
