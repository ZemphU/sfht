const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".btn");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
				"August", "September", "October", "November", "December"];

const renderCalendar = () => {
	let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() //get day of the week of first day
	let firstDayofNextMonth = new Date(currYear, currMonth + 1, 1).getDay() //get day of the week of first day
	let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // last date of month
	let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // last date of last month
	let liTag = "";
	
	for(let i = firstDayofMonth; i > 0; i--) {
		liTag += `<li class="gray">${lastDateofLastMonth - i + 1}</li>`;
	}
	
	
	for(let i = 1; i <= lastDateofMonth; i++) {
		liTag += `<li class="white">${i}</li>`;
	}
	
	for(let i = 1; i <= 7 - firstDayofNextMonth && firstDayofNextMonth != 0; i++) {
		liTag += `<li class="gray">${i}</li>`;
	}
	
	currentDate.innerText = `${months[currMonth]} ${currYear}`;
	console.log(currMonth);
	daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
	
	icon.addEventListener("click", () => {
		
		currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
		
		if(currMonth > 11) {
			currYear += 1;
			currMonth = 0;
		} else if(currMonth < 0) {
			currYear -= 1;
			currMonth = 11;
		}
		
		renderCalendar();
	});
});