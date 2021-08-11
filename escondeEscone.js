function solucao(numero) {
	//Codigo que auxilia uma contagem maior que 20
    if(numero<=20){
        console.log("VOCE CONSEGUE, MANINHO");
    }else{  
        for(let i=21; i<=numero; i++){
            console.log(i);
        }
    }
}