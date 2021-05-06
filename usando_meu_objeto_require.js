let kpop = require("./kpop")
const fs = require('fs')

kpop.forEach(kpop => {
        console.log("Idol -> " + kpop.nome + "\nHobby -> " + kpop.hobby)
})

const downloads = '/Users/Usuario/Downloads'
fs.readdir(downloads, (err, arquivos) => {
    arquivos.forEach(arquivo => {
        console.log(arquivo)
    })
})
