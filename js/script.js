const length = 5;
const width = 3;

function calculateArea() {
	const area = length * width;
	alert(`The area of the rectangle is ${area} square meters.`);
}

function calculatePerimeter() {
	const perimeter = 2 * (length + width);
	alert(`The perimeter of the rectangle is ${perimeter} meters.`);
}

const areaBtn = document.getElementById("areaBtn");
const perimeterBtn = document.getElementById("perimeterBtn");

areaBtn.addEventListener("click", calculateArea);
perimeterBtn.addEventListener("click", calculatePerimeter);
