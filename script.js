// give back the value between -100% & 100%
const normVal = (percentage, min, max) => {
  return 1 * ((percentage / 100) * (max - min) + min).toFixed(0);
}

const coordMove = (event) => {
	let w = window.innerWidth;
	let x = event.clientX;
	let xPerc = Math.ceil((x / w) * 100);
	let xSpectrum = normVal(xPerc, -200, 200);
	document.querySelector("#car").setAttribute("transform", `translate(${xSpectrum + 22} 0)`);
	document.querySelector("#lights").setAttribute("transform", `translate(${xSpectrum + 22} 0)`);
	document.querySelector("#lightPath").setAttribute("transform", `translate(${xSpectrum + 22} 0)`);
}

window.onload = () => {
	this.addEventListener("mousemove", coordMove);
	this.addEventListener("touchmove", coordMove);
	this.addEventListener("touch", coordMove);
};