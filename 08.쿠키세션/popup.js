
var mainPopup = "mainPopup"

function createCookie(){

    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    console.log(date);
    
    var cookie = "";
    cookie += mainPopup + "=true;"
    cookie +=" path=/;";
    cookie +=" expires=" + date.toUTCString();

    document.cookie = cookie;
}

function getCookie(){
    var arr = document.cookie.split("; ");

    for(var i =0; i < arr.length; i++){
        if(arr[i].indexOf(mainPopup)!=-1){
            return true;
        }
    }
}