function tabuada() {
    var numero = document.querySelector('input#num')
    var list = document.getElementById('seltab')
    if (numero.value.length == 0) {
       alert('Por favor digite um número!') 
    } else {
        list.innerHTML = ''
        var n1 = Number(numero.value)
        for (var c = 1; c <= 10; c++) {
            var r = c * n1
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${r}`
            item.value = `list${c}`
            list.appendChild(item)
        }
    }
    
}