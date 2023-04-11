// Função que calcula o valor da função polinomial de terceiro grau
function f(x, a, b, c, d) {
  return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
}

// Função que encontra o intervalo da raiz
function findInterval(a, b, c, d) {
  var interval = [];
  var delta = Math.pow(b, 2) - 3 * a * c;
  var x1 = (-b - Math.sqrt(delta)) / (3 * a);
  var x2 = (-b + Math.sqrt(delta)) / (3 * a);
  interval.push(x1, x2);
  return interval;
}

// Função que calcula a raiz da função polinomial de terceiro grau usando o método da bissecção
function calculateBisection(a, b, c, d, epsilon) {
  var interval = findInterval(a, b, c, d);
  var x1 = interval[0];
  var x2 = interval[1];
  var x = (x1 + x2) / 2;
  var fx = f(x, a, b, c, d);
  while (Math.abs(fx) > epsilon) {
    if (f(x1, a, b, c, d) * fx < 0) {
      x2 = x;
    } else {
      x1 = x;
    }
    x = (x1 + x2) / 2;
    fx = f(x, a, b, c, d);
  }
  return x;
}

// Função que é executada quando o botão "Calculate" é clicado
function calculate() {
  var a = parseFloat(document.getElementById("coeficient-a").value);
  var b = parseFloat(document.getElementById("coeficient-b").value);
  var c = parseFloat(document.getElementById("coeficient-c").value);
  var d = parseFloat(document.getElementById("coeficient-d").value);
  var epsilon = parseFloat(document.getElementById("epsilon").value);
  var root = calculateBisection(a, b, c, d, epsilon);
  document.getElementById("results").innerHTML = "The root is: " + root;
}
