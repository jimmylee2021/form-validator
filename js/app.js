let myInput = document.getElementById("pwd")
let lower = document.getElementById("lower")
let capital = document.getElementById("capital")
let numberbox = document.getElementById("number")
let lengthbx = document.getElementById("length")
let icon1 = document.getElementById("icon-1")
let icon2 = document.getElementById("icon-2")
let icon3 = document.getElementById("icon-3")
let icon4 = document.getElementById("icon-4")

myInput.onfocus = ()=> {
    document.getElementById("message").style.display="block";
}

myInput.onblur = ()=> {
    document.getElementById("message").style.display="none"
}

myInput.onkeyup = ()=> {
     let lowerCase = /[a-z]/g;

     if(myInput.value.match(lowerCase)) {
         icon1.classList.add("fa-check-circle")
         icon1.style.color = " hsl(278, 68%, 11%)"
         lower.style.color = " hsl(278, 68%, 11%)"
         icon1.classList.remove("fa-times")
     }else {
         icon1.classList.add("fa-times")
         icon1.style.color = "red"
         lower.style.color = "red"
         icon1.classList.remove("fa-check-circle");
     };

    let upperCase = /[A-Z]/g;

    if(myInput.value.match(upperCase)) {
        icon2.classList.add("fa-check-circle")
        icon2.style.color = " hsl(278, 68%, 11%)"
        capital.style.color = " hsl(278, 68%, 11%)"
        icon2.classList.remove("fa-times")
    }else {
        icon2.classList.add("fa-times")
        icon2.style.color = "red"
        capital.style.color = "red"
        icon2.classList.remove("fa-check-circle")
    }

    let number = /[0-9]/g;
    if(myInput.value.match(number)) {
        icon3.classList.add("fa-check-circle")
        icon3.style.color = " hsl(278, 68%, 11%)"
        numberbox.style.color = " hsl(278, 68%, 11%)"
        icon3.classList.remove("fa-times")
    }else{
        icon3.classList.add("fa-times")
        icon3.style.color = "red"
        numberbox.style.color = "red"
        icon3.classList.remove("fa-check-circle")
    }

    if(myInput.value.length >= 8){
        icon4.classList.add("fa-check-circle")
        icon4.style.color = " hsl(278, 68%, 11%)"
        lengthbx.style.color = " hsl(278, 68%, 11%)"
        icon4.classList.remove("fa-times")
    }else {
        icon4.classList.add("fa-times")
        icon4.style.color = "red"
        lengthbx.style.color = "red"
        icon4.classList.remove("fa-check-circle")
    }
}