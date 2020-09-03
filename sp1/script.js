

var left = document.querySelector(".left");
var right = document.querySelector(".right");
var slideUl = document.querySelector(".slide");
var BslideUl = document.querySelector(".bslide");
var Bslide = document.querySelectorAll(".bslide li");
var button = document.querySelector(".button");

var goSlide;
var count=0;
var startpoint,endpoint;

window.addEventListener('load',pageOn);
button.addEventListener('click',moveNow);

function pageOn(){

    goSlide=setInterval(go,2000);
}

function go(){
    if(count==8)count=0;
    startpoint=1000*count;
    count++;
    endpoint=1000*count;
    console.log(count);

    goAni();
}

function goAni(){
    var ani=slideUl.animate([
        {transform:"translateX("+-startpoint+"px)"},
        {transform:"translateX("+-endpoint+"px)"}
    ],300);
    ani.addEventListener('finish',function(){
        slideUl.style.transform="translateX("+-endpoint+"px)";
    })
}

function moveNow(e){
    clearInterval(goSlide);

    switch(e.target){
        case left :
            if(count==0)count=8;
            startpoint=1000*count;
            count--;
            endpoint=1000*count;
            goAni();
        break;

        case right :
            go();
        break;
    }

    goSlide=setInterval(go,2000);
}