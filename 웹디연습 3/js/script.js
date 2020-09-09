$(".gnb>li").hover(
    function(){
        $(this).children(".sub").stop().slideDown(350);
    },
    function(){
        $(this).children(".sub").stop().slideUp(350);
    }
);

$(".open").click(
    function(){
        $("#pop").show();
    }
);
$(".close").click(
    function(){
        $("#pop").hide();
    }
);

var tabA = document.querySelectorAll(".c1 .tab a");
var tabli = document.querySelectorAll(".c1 .tab li");
var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");
var content = document.querySelector("#content");
var wrap = document.querySelector("#wrap");

//var pop = document.querySelector("#pop");
//var open = document.querySelector(".open");
//var close = document.querySelector(".close");


content.addEventListener('click',tabtab);
//wrap.addEventListener('click',pop);


//function pop(e){
//    console.log("popup");
//    if(e.target == open){pop.classList.add("upup")}
//    if(e.target == close){pop.classList.remove("upup")}
//}

function tabtab(e){
    console.log("just click");
    switch(e.target){
        case tabA[0] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[0].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            notice.classList.add("now");
        break;
        case tabA[1] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[1].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            gallery.classList.add("now");
        break;
        
    }
}










