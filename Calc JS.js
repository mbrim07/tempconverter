document.querySelector('#zebra').addEventListener("click", convert)
document.querySelector('#better').addEventListener("click", convertf)
document.querySelector('#what').addEventListener("click", convertkf)
document.querySelector('#where').addEventListener("click", convertkc)
document.querySelector('#when').addEventListener("click", convertck)
document.querySelector('#how').addEventListener("click", convertfk)

function convert(){
// find value
const celsius = document.querySelector('#f').value;
// convert value
const convertedValue = celsius * 9/5 + 32
// Display value
document.querySelector('#saySomething').innerText = convertedValue
}
function convertf (){
	// find value
	const farenheit = document.querySelector('#c').value
	// convert value
	const convertedTotal = (farenheit - 32) / 5/9
	// Display value
	document.querySelector('#celsiusRead').innerText = convertedTotal
}
function convertkf (){
	// find value
	const kelvinf = document.querySelector('#kf').value
	// convert value
	const convertedTotal = (9/5 * (kelvinf -273.15)) +32
	// Display value
	document.querySelector('#kelvinRead').innerText = convertedTotal
}
function convertkc (){
	// find value
	const kelvinc = document.querySelector('#kc').value
	// convert value
	const convertedTotal = kelvinc - 273.15
	// Display value
	document.querySelector('#kelvincRead').innerText = convertedTotal
}
function convertck (){
	// find value
	const kelvinck = document.querySelector('#ck').value
	// convert value
	const convertedTotal = kelvinck + 273.15
	// Display value
	document.querySelector('#kelvinckRead').innerText = convertedTotal
}
function convertfk (){
	// find value
	const kelvinfk = document.querySelector('#fk').value
	// convert value
	const convertedTotal = (5/9*(kelvinfk-32)) + 273.15
	// Display value
	document.querySelector('#kelvinfkRead').innerText = convertedTotal
}