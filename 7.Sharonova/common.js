

var slider = document.querySelector(".portfolio__slider");
var list = slider.querySelector(".portfolio__list");
var listElems = slider.querySelectorAll(".portfolio__item");
var width = 900;
var count = listElems.length;
var position = 0;

slider.querySelector(".portfolio__arrow--left").addEventListener("click", function(){
	
	position = Math.min(position + width, 0);
	list.style.marginLeft = position + "px";
	
});

slider.querySelector(".portfolio__arrow--right").addEventListener("click", function(){
	
	position = Math.max(position - width, -width * (count - 1));
	list.style.marginLeft = position + "px";
	
});