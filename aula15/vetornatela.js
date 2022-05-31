let valor = [5, 8, 2, 9, 3]
let rece = []

for (let pos = 0; pos < valor.length; pos++) {
    console.log(`O valor ${valor[pos]} está na pisção ${pos}`)
}


for ( let pos in valor ) { // para (for) cada posição (pos) na (in) variavel composta (num)  "só funcinar para array(vetor) e object"
    console.log(`O valor ${valor[pos]} esta na posição${pos}`)        // mostrar variavel na posição valor[pos]
    rece[pos] = valor[pos]
}


console.log(valor.indexOf(5))  // ele busca a variavel dentro do vetor e me retorna a POSIÇÃO do vetor, caso não encontre ele RETORNA -1
let possicao = valor.indexOf(9)



if(possicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor esta na possição ${possicao}`)
}

















/*num.push(1)
num.sort()
console.log(num)
console.log(`O Valor tem ${num.length} posição`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}*/
