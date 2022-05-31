var t = new Date()
var h = t.getHours()

if (h < 12){
    console.log('Bom dia')
} else if (h <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('boa noite!')
}