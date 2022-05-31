
let valor = document.getElementById('txtn')
let valor1 = document.getElementById('txtn2')
let res = document.getElementById('res')
let valores = []
let c = 0

function parent(n) {
    c++
    if (valores.indexOf(n) == -1) {
       for(let pass = c; value.length < c; pass++) {
        valores[pass] = n
        return valores[pass]
       }
       
    } else {
        return 'Ja existe'
    }

}


function verificar() {

let v1 = Number(valor.value)
let v2 = Number(valor1.value)


res.innerHTML = parent(v1)

}