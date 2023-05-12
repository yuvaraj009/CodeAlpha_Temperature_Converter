function celToFahren() {
  const celIp = document.querySelector("#celsius").value;
  document.getElementById("cel-fah").innerHTML="Fahrenheit"+" "+" "+"=>"+ " "+(parseFloat(celIp)*1.8+32).toFixed(2);
}

function celTokelvin() {
  const celIp = document.querySelector("#celsius").value;
  document.getElementById("cel-kel").innerHTML= "Kelvin"+" "+" "+"=>"+ " "+(parseFloat(celIp)+273.15).toFixed(2);
}

function fahToCel() {
  const fahIp = document.querySelector("#fahrenheit").value;
  document.getElementById("fah-cel").innerHTML= "Celsius"+" "+" "+"=>"+ " "+((parseFloat(fahIp)-32)/1.8).toFixed(2);
}

function fahToKel() {
  const fahIp = document.querySelector("#fahrenheit").value;
  document.getElementById("fah-kel").innerHTML= "Kelvin"+" "+" "+"=>"+ " "+ (((parseFloat(fahIp)-32)/1.8)+273.15).toFixed(2);
}

function kelToCel() {
  const kelIp = document.querySelector("#kelvin").value;
  document.getElementById("kel-cel").innerHTML= "Celsius"+" "+" "+"=>"+ " "+ (parseFloat(kelIp)-273.15).toFixed(2);
}

function kelToFah() {
  const kelIp = document.querySelector("#kelvin").value;
  document.getElementById("kel-fah").innerHTML= "Fahrenheit"+" "+" "+"=>"+ " "+ (((parseFloat(kelIp)-273.15)*1.8)+32).toFixed(2);
  
}