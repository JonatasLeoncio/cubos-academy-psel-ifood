function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let total=0
    for(let item of palavras){
        if(item[0]== primeiraLetra && item[1]== segundaLetra){
            console.log(item);
            total++;
        }
    }
    if(total==0){
        console.log("NENHUMA");
    }

}