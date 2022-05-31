
function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var res = document.querySelector('div#res')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var soma = n1 + n2
    //res.innerHTML = (`a soma é ${soma}`)
    if (n1 < n2) {
        while (n1 <= n2) {
            res.innerHTML += (` ${n1}`)
            n1 = n1 + 1
        }
    } else {
        while (n1 >= n2) {
           res.innerHTML += (` ${n2}`)
            n1 = n1 - 1 
        }

    }
}