var userImageLink="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png"; 
var time_start,end_time;
var downloadsize=5616998;
var downloadImgSrc=new Image();
downloadImgSrc.onload=function(){
    end_time=new  Date().getTime();
    displaySpeed();
};
time_start=new Date().getTime();
downloadImgSrc.src=userImageLink;
document.write*"time start: "   + time_start);
document.write("<br>");
function displaySpeed(){
    var timeduration=(end_time-time_start)/1000;
    var loadBits=downloadsize*8;
    var bps=(loadBits/timeduration).toFixed(2);
    var speedInKbps=(bps/1024).toFixed(2);
    var speedInMbps=(speedInKbps/1024).toFixed(2);
    alert("your internet connection speed is:\n" + bps+" bps\n" + speedInKbps+"kbps\n"+speedInMbps+"Mbps\n");
}