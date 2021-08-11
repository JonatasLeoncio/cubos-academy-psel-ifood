function solucao(obras) {
	//seu codigo aqui
    let valiosa=0;
    let nomeObra="";
    for(let item of obras){
        if(item.valor>=valiosa){
            valiosa=item.valor;
            nomeObra=item.nome;
        }
    }
    console.log(nomeObra);
}