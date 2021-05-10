var resposta = ''
var numero = [];
var a = '';
var b = '';


function exibeNumer(digit){
	console.log(digit);

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
	var resposta = '';
	

	for(i=0; i<str.length ; i++){
		if (str[i]!= '+' || str[i]!= '-' || str[i]!= '*' || str[i]!= '/')
		{ 
			if	(sinal == '')
				num1 = num1 + str[i];
			else 
				num2 = num2+ str[i];
		}

		else 
			sinal = str[i];		
	}					
	document.getElementById("tela").value = resposta;	
	
}

