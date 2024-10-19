function montaFrase(palavra){
    let fraseFinal = ''
    for (let palavra of palavras){
        fraseFinal = fraseFinal + palavra + " "
    }
    return fraseFinal.trim()
}
const palavras = ["oi", "sumido", "tudo bem?", "saudades"]
console.log(montaFrase(palavras))
