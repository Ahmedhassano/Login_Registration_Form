let sign_in_a = document.querySelector(".container .sign_in p a");
let sign_up_a = document.querySelector(".container .sign_up p a");
let contairer = document.querySelector(".container "); 
sign_in_a.onclick = function () {
 contairer.classList.add("active")

}
sign_up_a.onclick = function () {
 contairer.classList.remove("active")
  
 
 }