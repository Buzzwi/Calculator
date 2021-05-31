var numero = [];
var a = '';
var b = '';


function exibeNumer(digit){
	console.log(typeof digit);
	

	document.getElementById("tela").value+=digit; 
	
	
		
		



	 for(i=0; i<numero.length ; i++){

	 	a += a + numero[i];				
	 }	
}

 
function equal(){
	
	var str = document.getElementById("tela").value;
	var num1 = '';
	var num2 = '';
	var sinal = '';
	var ans ;
	
	
	

	for(i=0; i<str.length ; i++){
		if (str[i]!== '+' && str[i]!== '-' && str[i]!== '*' && str[i]!== '/')
		{ 
			if	(sinal == '')
				num1 = num1 + str[i];
			else 
				num2 = num2+ str[i];
		}

		else {
			sinal = str[i];
		}
			
	}					
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	if (sinal=='+')
		ans = num1+num2;
	else if (sinal=='-')
		ans = num1-num2;
	else if (sinal=='*')
		ans = num1*num2;
	else if (sinal=='/')
		ans = num1/num2;
	else
		ans = 'Resultado Indefinido';

	document.getElementById("tela").value = ans;
	console.log(teste);
	
}

function eraseCal(){
	document.getElementById("tela").value	= ''
}
function porcentagem(digit){
	var str = document.getElementById("tela").value;
	var num1 = '';
	var num2 = '';
	var sinal = '';
	var ans ;

	document.getElementById("tela").value+=digit;
	for(i=0; i<str.length ; i++){
		if (str[i]!== 'x')
		{ 
			if	(sinal == '')
				num1 = num1 + str[i];
			else 
				num2 = num2+ str[i];
		}

		else {
			sinal = str[i];
		}
			
	}					
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	ans = num1*num2*0.01;
	document.getElementById("tela").value = ans;
}