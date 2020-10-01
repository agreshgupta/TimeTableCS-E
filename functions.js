function buttonClick() {
    alert("Please use whatsapp link.");
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var d = " AM";
    if (h > 12) {
        h = h - 12;
        h = "0" + h;
        d = " PM";
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + d;
    var t = setTimeout(startTime, 500);

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("txt0").innerHTML = days[today.getDay()];

    current();
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function current(){

    var today = new Date();
    var h = parseInt(today.getHours());
    var m = parseInt(today.getMinutes());

    var min = h*60 + m;
    var day = today.getDay();
    if(day==1){
        
        if( min >= 630 && min <= 680){
            document.getElementById("M1").style.background = "#FF1493";
        }
        else if( min >= 685 && min <= 735){
            document.getElementById("M2").style.background = "#FF1493";
        }
        else if( min >= 795 && min <= 845){
            document.getElementById("M3").style.background = "#FF1493";
        }
        else if( min >= 850 && min <= 900){
            document.getElementById("M3").style.background = "#FF1493";
        }
        else if( min >= 905 && min <= 960){
            document.getElementById("M4").style.background = "#FF1493";
        }
        else if( min >= 965 && min <= 1020){
            document.getElementById("M5").style.background = "#FF1493";
        }
    }
    if(day==2){
        
        if( min >= 630 && min <= 680){
            document.getElementById("T1").style.background = "#FF1493";
        }
        else if( min >= 685 && min <= 735){
            document.getElementById("T2").style.background = "#FF1493";
        }
        else if( min >= 795 && min <= 845){
            document.getElementById("T3").style.background = "#FF1493";
        }
        else if( min >= 850 && min <= 900){
            document.getElementById("T3").style.background = "#FF1493";
        }
        else if( min >= 905 && min <= 960){
            document.getElementById("T4").style.background = "#FF1493";
        }
        else if( min >= 965 && min <= 1020){
            document.getElementById("T5").style.background = "#FF1493";
        }
    }
    if(day==3){
        
        if( min >= 630 && min <= 680){
            document.getElementById("W1").style.background = "#FF1493";
        }
        else if( min >= 685 && min <= 735){
            document.getElementById("W1").style.background = "#FF1493";
        }
        else if( min >= 795 && min <= 845){
            document.getElementById("W3").style.background = "#FF1493";
        }
        else if( min >= 850 && min <= 900){
            document.getElementById("W3").style.background = "#FF1493";
        }
        else if( min >= 905 && min <= 960){
            document.getElementById("W4").style.background = "#FF1493";
        }
        else if( min >= 965 && min <= 1020){
            document.getElementById("W5").style.background = "#FF1493";
        }
    }
    if(day==4){
        
        if( min >= 630 && min <= 680){
            document.getElementById("Th1").style.background = "#FF1493";
        }
        else if( min >= 685 && min <= 735){
            document.getElementById("Th1").style.background = "#FF1493";
        }
        else if( min >= 795 && min <= 845){
            document.getElementById("Th2").style.background = "#FF1493";
        }
        else if( min >= 850 && min <= 900){
            document.getElementById("Th3").style.background = "#FF1493";
        }
        else if( min >= 905 && min <= 960){
            document.getElementById("Th4").style.background = "#FF1493";
        }
        else if( min >= 965 && min <= 1020){
            document.getElementById("Th5").style.background = "#FF1493";
        }
    }
    if(day==5){
        
        if( min >= 630 && min <= 680){
            document.getElementById("F1").style.background = "#FF1493";
        }
        else if( min >= 685 && min <= 735){
            document.getElementById("F2").style.background = "#FF1493";
        }
        else if( min >= 795 && min <= 845){
            document.getElementById("F3").style.background = "#FF1493";
        }
        else if( min >= 850 && min <= 900){
            document.getElementById("F4").style.background = "#FF1493";
        }
        else if( min >= 905 && min <= 960){
            document.getElementById("F5").style.background = "#FF1493";
        }
        else if( min >= 965 && min <= 1020){
            document.getElementById("F5").style.background = "#FF1493";
        }
    }
}