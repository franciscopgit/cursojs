let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.4,
engordar(p){
    this.peso += p 
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log(typeof amigo.engordar)
console.log(amigo)
console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)