document.getElementById("container");

document.querySelector("#container");

document.getElementsByClassName("second");

const ols = document.querySelector("ol");
const li = document.querySelectory(".third");
ols.li.querySelector(".third"); // document.querySelector('ol .third');

const container = document.querySelector("#container");
container.innerText = "Hello!";

const divFoot = document.querySelector(".footer");
divFoot.classList.add("main");
divFoot.classList.remove("main");

const newLi = document.createElement("li");

newLi.innerText = "four";

list.append(newLi);// need to call ul (let list = document.querySelector('ul'))

const ol = document.querySelector("ol");
ol.children;
const lis = ol.children;
setInterval(function(){
    for(let li of lis){
        li.style.backgroundColor = green;
    }
},500)

const removeDiv = document.querySelector('.footer');
removeDiv.remove();
