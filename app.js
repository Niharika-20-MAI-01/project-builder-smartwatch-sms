var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var $small_time=document.getElementsByClassName("time_small")[0];
var $big_time=document.getElementsByClassName("time_big")[0];
var $day=document.getElementsByClassName("day")[0];
var $chat=document.getElementsByClassName("chat")[0];
var $new_screen=document.getElementsByClassName("time_day")[0];
var $img=document.getElementsByClassName("images")[0];
var $screen2=document.getElementsByClassName("screen2")[0];
var $next_screen=document.createElement("div"); 
var $next_screen2=document.createElement("div"); 
var $msg1=document.createElement("div"); 
var $msg2=document.createElement("div"); 
var $msg3=document.createElement("div"); 
$msg1.textContent="C";
$msg2.textContent="Java";
$msg3.textContent="Python";

//hr = hr < 10 ? "0" + hr : hr
//min = min < 10 ? "0" + min : min
function time(){
    var d=new Date(); 

    hr = d.getHours()
    if(hr < 10){
        hr = "0" + hr

    }

    min = d.getMinutes()
    if(min < 10){
        min = "0" + min

    }

//$small_time.innerHTML=d.getHours()+":"+d.getMinutes();
//$big_time.innerHTML=d.getHours()+":"+d.getMinutes();

    $small_time.innerHTML=hr+":"+min;
    $big_time.innerHTML=hr+":"+min;
    $day.innerHTML=day_list[d.getDay()]

}
setInterval(time, 1000)

var v=0;
$chat.addEventListener("click",myfun);
function myfun(){
    if(v===0){
    $chat.style.color="red";
    $new_screen.replaceWith($next_screen)
    $next_screen.classList.add("screen3")
    $next_screen.append($msg1)
    $next_screen.append($msg2)
    $next_screen.append($msg3)
    v=2   
}
   else if(v==1){
       $next_screen2.replaceWith($next_screen);
       $next_screen.classList.add("screen3")
       $next_screen.append($msg1)
       $next_screen.append($msg2)
       $next_screen.append($msg3)
       v=2 
   }
   else{
    $next_screen.replaceWith($new_screen); 
    $chat.style.color="white";
    v=0;
   }
}
$msg1.addEventListener("click",function(){ 
    myfun1(0)
});
$msg2.addEventListener("click",function(){   
    myfun1(1)
});
$msg3.addEventListener("click",function(){   
    myfun1(2)
});

function myfun1(val){
    $next_screen.replaceWith($next_screen2) 
    $next_screen2.classList.add("screen4")
    $next_screen2.style.padding="5px"
    $next_screen2.style.fontSize="15px"
    if(val==0){
    $next_screen2.innerHTML="C is the mother of all programming language and it is a structure based language."
    }
    else if(val==1){
        $next_screen2.innerHTML="Java is a strongly typed object oriented programming language and it is a very powerful language.";
    }
    else{
        $next_screen2.innerHTML="Python is an interpreter based language and it is easy to learn and it is the best developing language."
    }
    v=1;
}


