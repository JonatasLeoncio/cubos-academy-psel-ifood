function solucao(cor1, cor2) {
	//Codigo de Misturas de Cores
   if(cor1=== cor2){        //Compara se é a mesma cor
        console.log(cor1);
    }else{                  // caso sejam cores diferentes resulta a mistura delas
        
        if(cor1==="azul" && cor2=="amarelo" ||cor2=="azul" && cor1=="amarelo" ){
            console.log("verde");
        }else if(cor1==="azul" && cor2=="vermelho" || cor2=="azul" && cor1=="vermelho"){
            console.log("roxo");
        }else if(cor1==="amarelo" && cor2=="vermelho"||cor2=="amarelo" && cor1=="vermelho"){
            console.log("laranja");
        }
    } 

}