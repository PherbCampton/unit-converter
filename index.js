
function unitConverter(valNum) {
    document.getElementById("kilograms").innerText = valNum;
    document.getElementById("pounds").innerText = valNum;
    document.getElementById("meters").innerText = valNum;
    document.getElementById("feets").innerText = valNum;
    document.getElementById("gallons").innerText = valNum;
    document.getElementById("liters").innerText = valNum;
    document.getElementById("kilogram-result").innerText = (valNum /2.2046).toFixed(3);
    document.getElementById("pound-result").innerText = (valNum *2.2046).toFixed(3);
    document.getElementById("meter-result").innerText = (valNum /3.2808).toFixed(3);
    document.getElementById("feet-result").innerText = (valNum *3.2808).toFixed(3);
    document.getElementById("liter-result").innerText = (valNum *3.7854).toFixed(3);
    document.getElementById("gallon-result").innerText = (valNum /3.7854).toFixed(3);
}
