let valores = []
let n = 11
let c = 0



    if (valores.indexOf(n) == -1) {
        c++
       for(let pas = c; valores.length < c; pas++) {
        valores[pas] = n
        console.log(valores[pas])
    }
       
    } else {
        console.log('já existe')
    }
