
// console.log(date);

// function start(){
//     document.getElementById('count')=date;
//     increasing();
// }
count=()=>{
    var count=Date.now();
    document.getElementById('count').innerHTML=count;
    // console.log(date);
    // console.log(date);
}
// var ml=0;
// milliseconds=()=>{
//     ml++;
//     if(ml>1000){
//         document.getElementById('ml').innerHTML=0;
//         milliseconds();
//     }
//     else{
//         document.getElementById('ml').innerHTML=ml;
//     }
// }
// setInterval(milliseconds,1);
seconds=()=>{
    var secs=new Date();
    document.getElementById('sec').innerHTML=secs.getSeconds();
// //     console.log(date.getSeconds());
}
// // seconds();
 setInterval(seconds,1000);
 setInterval(count,1);

minutes=()=>{
    var mins=new Date();
    document.getElementById('min').innerHTML=mins.getMinutes();
    // console.log(mins.getMinutes());
}
setInterval(minutes,1000);

hours=()=>{
    var hr=new Date();
    document.getElementById('hr').innerHTML=hr.getHours();
}
setInterval(hours,1000);
