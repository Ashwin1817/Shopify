var sidenav= document.querySelector(".side-navbar")
var on=document.getElementById("one")
function show(){
    sidenav.style.left="0"
}
on.addEventListener("click",function(){
    sidenav.style.left="-60%"
})