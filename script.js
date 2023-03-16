/*ლექცია #9 - დავალება #1 - შექმენი button, რომელზე დაწკაპების შემდეგაც გაიხსნება მოდალი
და მოდალის უკან შავი/გამჭვირვალე background.*/

var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









/*ლექცია #9 - დავალება #3 - შექმენი input, სადაც მომხმარებელს შესაძლებლობა 
ექნება შეიტანოს ":"-ით ერთმანეთისგან გამოყოფილი რიცხვები, 
average ღილაკზე დაწკაპების შემდეგ დაითვალე ამ რიცხვების საშუალო და გამოუტანე ეკრანზე.*/

let btn2 = document.querySelector(".btn2")
let inp2 = document.querySelector(".inp2")
let average = 0;
let sum = 0
let arr2 = []


btn2.addEventListener("click", function(y){

    arr2.push(inp2.value)

    let sum = arr2.filter(y => y % 2==0){
    return sum;

    })
    console.log(sum)


})





