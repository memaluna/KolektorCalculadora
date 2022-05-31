function operacion(){
	
	let primerValor = 0,segundoValor = 0, resultadoValor = 0;
	
	let inValor1 = document.getElementById("inputPrimerValor");
	let inValor2 = document.getElementById("inputSegundoValor");
	let outResultado = document.getElementById("resultado");
	let sumar = document.getElementById("sumar");
	let restar = document.getElementById("restar");
	let mult = document.getElementById("mult");
	let divi = document.getElementById("divi");
	
	primerValor = parseFloat(inValor1.value);
	segundoValor = parseFloat(inValor2.value);
		
	if(!isNaN(primerValor) && !isNaN(segundoValor)){	
		if(sumar.checked==true){
			resultadoValor = primerValor + segundoValor;
			outResultado.innerHTML = "Resultado de la suma: " + resultadoValor;
		}else if(restar.checked==true){
			resultadoValor = primerValor - segundoValor;
			outResultado.innerHTML = "Resultado de la resta: " + resultadoValor;
		}else if(mult.checked==true){
			resultadoValor = primerValor * segundoValor;
			outResultado.innerHTML = "Resultado de la multiplicación: " + resultadoValor;
		}
		else{
			resultadoValor = primerValor / segundoValor;
			if(isNaN(resultadoValor)){
				outResultado.innerHTML = "El resultado no es un número..."
			}else{
				outResultado.innerHTML = "Resultado de la división: " + resultadoValor;
			}
		}	
	}else{
		outResultado.innerHTML = "Ingresar Números!! ";	
	}
	outResultado.className = "resul";
}


