function solucao(precos) {
    //seu codigo aqui
    let total=0;
    let itemMaior200=0;
    let itemIgual200=0;
    
    for(let i=0; i<precos.length;i++){
        total+=precos[i];
        if(precos[i]>200){
            itemMaior200++;
        }else if(precos[i]==200){
            itemIgual200++;
        }
    }
    if(total>1000 && itemMaior200>0){
        console.log("PREMIUM");
    }else if(total>1000 && itemMaior200==0 ){
        console.log("VIP");
    }else{
        console.log("NORMAL");
    }

}