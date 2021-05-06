
//IF TERNÁRIO
let ehGato = false
let resultado = ehGato==true ? 'Esse é gato!' : 'Porra, é feio!'
console.log(resultado)

//SWITCH
switch (ehGato){
    case !ehGato:
        console.log("Esse é gato!")
        break
    case ehGato :
        console.log("Esse é feio!")
}

//FUNÇÃO CONSTRUTORA DE OBJETOS
function Idols(nome,group){
    this.nome = nome,
    this.group = group
}

let meusIdols = new Idols('Jungkook','BTS')
console.log(meusIdols)
console.log("Eu amo o "+ meusIdols.nome + " do grupo "+ meusIdols.group + ".")
console.log(`Eu amo o ${meusIdols.nome} do grupo ${meusIdols.group} pra caramba! Como eu sou juvenil.`)


//TESTE DE ALGUNS MÉTODOS DE STRING
let frase = 'Ano que vem, se tudo der certo, eu vou morar na Coreia!'
console.log(frase.split(","))
console.log(frase.slice(47,54))
console.log(frase.replace('certo','bom'))


