"use strict";

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let eyeball = document.getElementById("eyeball");
let eyeball2 = document.getElementById("eyeball2");
let meteorite = document.querySelector(".meteorite");
let meteorite1 = document.querySelector(".meteorite1");
console.log(meteorite);


document.addEventListener('mousemove', (event) => {
  let posX = event.clientX - window.innerWidth/2;
  let posY = event.clientY - window.innerHeight/2;
  
  square1.style.transform = "translate("+posX*0.01+"%, "+posY*0.01+"%)";
  square2.style.transform = "translate("+posX*0.01+"%, "+posY*0.01+"%)";
  eyeball.style.transform = "translate("+posX*0.03+3+"%, "+posY*0.03+"%)";
  eyeball2.style.transform = "translate("+posX*0.03+3+"%, "+posY*0.03+"%)";
});

const Star = function (selector, time) {
	this._elem = document.querySelector(selector);	        
	this._time = time;				        
}

Star.prototype.moveStar = function() {	    	
	let timer = setInterval(() => {        
		let timer1 = setInterval(()=>{
            this._elem.style.transform = "scale(1)";
        }, 400);
        let timer2 = setTimeout(() => { 
            clearInterval(timer1);
            this._elem.style.transform = "scale(0)";
        }, 800);		
	}, this._time);	    	
};

let star1 = new Star(".star1", 2400);
star1.moveStar();

let star2 = new Star(".star2", 3400);
star2.moveStar();

let star3 = new Star(".star3", 4400);
star3.moveStar();

let star4 = new Star(".star4", 5400);
star4.moveStar();

let star5 = new Star(".star5", 2400);
star5.moveStar();

let star6 = new Star(".star6", 3400);
star6.moveStar();

let star7 = new Star(".star7", 5400);
star7.moveStar();

let star8 = new Star(".star8", 4400);
star8.moveStar();

let star9 = new Star(".star9", 3400);
star9.moveStar();

let star10 = new Star(".star10", 5400);
star10.moveStar();

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let meteoriteWigth = meteorite.getBoundingClientRect().width;
let meteoriteHeight = meteorite.getBoundingClientRect().height;
let x = 800;
let y = -500;
function moveMeteorite(elem, time, limitX, speed, repetitionTime) {
    setInterval(() => {
        let int = setInterval(() => {        
            x-=speed;
            y+=speed;
            elem.style.left = x +'px';
            elem.style.top = y +'px';
            if(x < limitX || y > width+meteoriteWigth){
                x = 800;    
                y = -500;
                clearInterval(int);
            }	
        }, time);    
    }, repetitionTime);
};
moveMeteorite(meteorite, 5, -300, 3, 16000);


let x1 = 200;
let y1 = -500;
function moveMeteorite1(elem, time, limitX, speed, repetitionTime) {
    setInterval(() => {
        let int1 = setInterval(() => {        
            x1+=speed;
            y1+=speed;
            elem.style.left = x1 +'px';
            elem.style.top = y1 +'px';
            if(x1 > width+meteoriteWigth || y1 > width+meteoriteWigth){
                x1 = 200;    
                y1 = -500;
                clearInterval(int1);
            }	
        }, time);    
    }, repetitionTime);
};
moveMeteorite1(meteorite1, 5, -300, 8, 23000);