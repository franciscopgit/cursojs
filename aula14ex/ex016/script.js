function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo =  document.getElementById('pas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossível Contar')

    } else {
        res.innerHTML = 'Contando: <br>'
        var i1 = Number(inicio.value)
        var f2 = Number(fim.value)
        var p3 = Number(passo.value)
        if (p3 <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p3 = 1
        }
        if (i1 < f2) {
            //contagem crescente
            for (var c = i1;c <= f2;c += p3) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        } else {
            // contagem regressiva
            for (var c = i1;c >= f2;c -= p3) {
                res.innerHTML += (` ${c} \u{1F449}`)
            }
        }
        res.innerHTML += `\u{1F44D}`
    } 
}