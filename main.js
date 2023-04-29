var IconMenu=document.getElementById("icon-menu"),
    Menu=document.getElementById("Menu"),
    x=document.getElementById("x");

IconMenu.addEventListener("click",function () {
    console.log("menu");
    // Menu.style.right="0px";      
    Menu.classList.toggle("toggle_menu1");
    Menu.classList.remove("toggle_menu2");

});
x.addEventListener("click",function () {
    // Menu.style.display="none";
    Menu.classList.toggle("toggle_menu2");
    Menu.classList.remove("toggle_menu1");

    

    
})







// '''''''''''  from '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
var myName = document.getElementById("fullname");
var myEmail = document.getElementById("email");
var myphone = document.getElementById("phone");
var myPass = document.getElementById("password");
var validmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validphone=/^d[0-9-]/;

var result = document.querySelector(".output");
function login() {
    result.innerHTML = "";
    result.style.display = "none";
    if (myName.value.length == 0) {
        result.innerHTML += "-Name is Reqired.<br>";
        result.style.display = "block";
    }; 
    if (myEmail.value.length == 0){
        result.innerHTML += "-Email is Reqired.<br>";
        result.style.display = "block";
    }else if (!myEmail.value.match(validmail)) {
        result.innerHTML += "-Email is not valid.<br>";
        result.style.display = "block";
    };
    if (myPass.value.length == 0) {
        result.innerHTML += "-Password is Reqired.<br>";
        result.style.display = "block";
    }else if (myPass.value.length < 8) {
        result.innerHTML += "-Password must be 8 chars at least.<br>";
        result.style.display = "block";
    };
    if (myphone.value.length == 0){
        result.innerHTML += "-phone number is Reqired.<br>";
        result.style.display = "block";
    }else if (!myphone.value.match(validphone)) {
        result.innerHTML += "-phone number is not valid.<br>";
        result.style.display = "block";
    }

    if (result.style.display == "none") {
        result.style.display = "block";
        result.innerHTML += "-Successful Submit.<br>";

    };
}






