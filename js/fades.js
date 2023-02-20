const currentScroll = window.pageYOffset;
			
const intersectionCallback = (entries) => {
	document.querySelector(".one").style.opacity = entries[0].intersectionRatio;
}			
let obs1 = new IntersectionObserver(intersectionCallback, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
obs1.observe(document.querySelector("#one"));


const intersectionCallback2 = (entries) => {
	document.querySelector(".two").style.opacity = entries[0].intersectionRatio;
}			
let obs2 = new IntersectionObserver(intersectionCallback2, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
obs2.observe(document.querySelector("#two"));


const intersectionCallback3 = (entries) => {
	document.querySelector(".three").style.opacity = entries[0].intersectionRatio;
}			
let obs3 = new IntersectionObserver(intersectionCallback3, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
obs3.observe(document.querySelector("#three"));


const intersectionCallback4 = (entries) => {
	document.querySelector(".four").style.opacity = entries[0].intersectionRatio;
}			
let obs4 = new IntersectionObserver(intersectionCallback4, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
obs4.observe(document.querySelector("#four"));

const intersectionCallback5 = (entries) => {
	document.querySelector(".five").style.opacity = entries[0].intersectionRatio;
}			
let obs5 = new IntersectionObserver(intersectionCallback5, { threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
obs5.observe(document.querySelector("#five"));

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
			
/*			
window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= 800) {
	opacity = 1;
} else if (currentScroll <= 1000) {
	opacity = 1 - (currentScroll - 800) / 200;
} else {
	opacity = 0;
}
document.querySelector(".two").style.opacity = opacity;
});
			
window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= 1600) {
	opacity = 1;
} else if (currentScroll <= 1800) {
	opacity = 1 - (currentScroll - 1600) / 200;
} else {
	opacity = 0;
}
document.querySelector(".three").style.opacity = opacity;
});
			
window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= 2200) {
	opacity = 1;
} else if (currentScroll <= 2400) {
	opacity = 1 - (currentScroll - 2200) / 200;
} else {
	opacity = 0;
}
document.querySelector(".four").style.opacity = opacity;
});
*/