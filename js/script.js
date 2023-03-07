const length = 5;
const width = 3;

function calculateArea() {
  const length = document.getElementById("Length").value;
  const width = document.getElementById("Width").value;
	const area = length * width;
	alert(`The area of the rectangle is ${area} square meters.`);
}

function calculatePerimeter() {
  const length = document.getElementById("Length").value;
  const width = document.getElementById("Width").value;
	const perimeter = 2 * (length + width);
	alert(`The perimeter of the rectangle is ${perimeter} meters.`);
}

const areaBtn = document.getElementById("area-btn");
const perimeterBtn = document.getElementById("perimeter-btn");

areaBtn.addEventListener("click", calculateArea);
perimeterBtn.addEventListener("click", calculatePerimeter);
