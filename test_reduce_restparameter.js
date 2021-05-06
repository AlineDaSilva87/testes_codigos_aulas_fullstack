//FUNÇÃO QUE CONCATENA STRINGS USANDO REDUCE
let array = ["O","Palmeiras","é","o","maior","de","todos!!"]

function concatenar(array){
    return array.reduce((acumulador,elementoatual) => {
        return acumulador + " " + elementoatual
        })
}
console.log(concatenar(array))

//FUNÇÃO CALLBACK DE CALCULADORA
function calculadora(callback,numero,numerob){
    return callback(numero,numerob)
}
console.log(calculadora((numero,numeroB)=>numero+numeroB,2,4))

//FUNÇÃO QUE SOMA NÚMEROS USANDO REST PARAMETER
function soma(...numeros){
    return numeros.reduce((acum,valorAtual)=>{
        return acum+valorAtual
    })
}
console.log(soma(1,2,3,4))

//FUNÇÃO LÍNGUA DO P USANDO O .MAP PARA MODIFICAR CADA ELENTO DO MEU ARRAY
let array1= ['eu','amo','o','Kai']
console.log(array1.reduce((acum,atual)=>{
    return acum + " " + atual
}))
let linguaDoP = array1.map(function(elemento){
    return "P-"+elemento
})
console.log(linguaDoP)