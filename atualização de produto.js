var produtos = ["1L Leite", "Lata de milho", "Arroz 1k", "1K trigo", "2L refrigerante",]


var precos = [5, 1.5, 2, 4, 6]


var quantidade = [200, 300, 200, 100, 250]


var nomeProduto , precoProduto, qtProduto


//Operação de reposição ou atualização de cadastro


//Assumimos que o código do produto é o índice
var codProduto = -1


while(codProduto < 0 || codProduto >= produtos.length){
  var codProduto = Number(prompt("Digite o código do produto que deseja atualizar"))
}


//Atualiza o nome do produto


var nomeProduto = prompt("Digite o novo nome do produto se deseja alterá-lo caso contrario tecle Enter: " )


if(nomeProduto !== ""){
  produtos[codProduto] = nomeProduto
}
//Atualiza o valor do produto


var precoProduto = prompt("Digite o novo preço do produto se deseja alterá-lo caso contrario tecle Enter: ")


if (precoProduto !== "") {
  precos[codProduto] = Number(precoProduto)
}


//Atualiza a quantidade do produto
 
var qtProduto = prompt("Digite a nova quantidade do produto se deseja alterá-lo caso contrario tecle Enter: ")


if (qtProduto !== "") {
  quantidade[codProduto] = Number(qtProduto)
}


console.log(produtos)
console.log(precos)
console.log(quantidade)
