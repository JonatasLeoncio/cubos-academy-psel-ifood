function solucao(sequencia) {
	//seu codigo aqui
let direita=0;
    let esquerda=0;
    for(let i=0; i<sequencia.length; i++){
        if(sequencia[i]==">"){
            direita++;
        }else{
            esquerda++;
        }
    }
    let result=direita-esquerda;
    let contGiro=0;
    let contGiroNegativo=7;
    
    if(result==0){
        console.log(result);
    }
    else if(result>0){
        for(let i=0; i<result; i++){
            contGiro++;
            if(contGiro>6){
                contGiro=0;               
            }
        }
       console.log(contGiro); 
    }else if(result<0){
        for(let i=6; i>=result; i--){
            contGiroNegativo--;
            if(contGiroNegativo<=0){
                contGiroNegativo=7;               
            }
        }
       console.log(contGiroNegativo); 
      
    }
}