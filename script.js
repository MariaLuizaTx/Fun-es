function algo() {
    console.log("Alguma mensagem no console")
}
algo()


function meuNome(nome){
    console.log(nome)
}
meuNome(`Maria Luiza`)


function sobre(nome,idade,estiloMusical) {
    console.log(`Nome: ${nome}`)
    console.log(`Idade: ${idade}`)
    console.log(`Estilo musical: ${estiloMusical}`)
}
sobre(`Malu`,`18 anos`,`Todos kk`)

function favoritos(filme,musica){
    console.log(`Musica: ${musica}`)
    console.log(`Filme: ${filme}`)
}
favoritos(`Mulher Rei`,`Coldplay - The Scientist`)

function multiplicador(numero){
    let contador = 3
    
    console.log(resultado=contador*numero)
}
multiplicador(3)

function trueOurFalse(){
    let inimigo = false
    if(inimigo == false){
        console.log(`A variavel é falsa.`)
    }else{
        console.log(`A variavel é verdadeira.`)
    }
}
trueOurFalse()