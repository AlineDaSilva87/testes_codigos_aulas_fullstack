let sites = ['modapraia.com','idols.com','ajudasenhor.com']

function recebeHttp(url){
    return 'http://'+url
}

function processar(lista,funcao){
    let listaSites = []
    lista.forEach(element => {
        listaSites.push(recebeHttp(element))
    });
    
    return listaSites
} 
console.log(processar(sites,recebeHttp))
