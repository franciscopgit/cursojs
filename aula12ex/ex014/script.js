function carregar() {
    var mensa = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = new Date()
    var hora = 22 //dia.getHours()
    mensa.innerHTML = `Agora são ${hora} horas.`
    
    if(hora > 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#F59544'
    } else if (hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#CF8075'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#2C2228'
    }
}
