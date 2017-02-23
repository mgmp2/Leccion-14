function FahrenheittoCelsius(){
  var f = document.getElementById("fahrenheit");
  var r = (f.value-32)*(5/9);
  document.getElementById("result").innerHTML = "<br>"+"De Fahrenheit a Celsius es: <br>"+ r.toFixed(2);
}

function CelsiustoFahrenheit(){
  var c = document.getElementById("celsius");
  var r = (9/5*c.value)+32;
  document.getElementById("result").innerHTML = "<br>"+"De Celsius a Fahrenheit es: <br>"+ r.toFixed(2);
}
