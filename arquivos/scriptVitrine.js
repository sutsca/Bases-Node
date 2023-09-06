function comprarProduto(nomeProduto,precoProduto,idQuantidade){
    const quantidade = document.getElementById(idQuantidade).ariaValueMax;
    const total = precoProduto * quantidade;
    alert(`Você comprou ${quantidade} ${nomeProduto}(s) no valor total de R$ ${total.toFixed(3)}`)
}