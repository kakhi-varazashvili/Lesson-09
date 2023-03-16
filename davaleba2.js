/*ლექცია #9 - დავალება #2 - შექმენი input და button. input-ში მომხმარებელი ჩაწერს ფერს და button ღილაკზე
დაწკაპების შემდეგ body-ს background შეიცვლება ჩაწერილ ფერად. 
(ფერები რომლის ჩაწერაც შეუძლია: red, blue, green, black, white). თუ სხვა ფერი ჩაწერა, 
გამოუტანე შეტყობინება alert-ის საშუალებით. */


let body = document.querySelector("body")
let btn = document.querySelector(".btn")
let inp = document.querySelector(".inp")
let arr = ["red","blue","green","black","white"]

btn.addEventListener("click", function(){
    if(arr.includes(inp.value)== false){
        alert("try different color")
    }

    for(let i of arr){
        if(inp.value == i){
            body.style.backgroundColor = inp.value
        }

    }

})