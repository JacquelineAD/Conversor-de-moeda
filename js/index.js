//Primeiro = add um elento que mostre que o botão de conversão foi clicado


const meuBotao = document.getElementById('btn');
const moedaSelecionada = document. getElementById('converterPara');

function converterValores(){ 
    const valorInput = document.getElementById('inputDeValor').value //pega o val digitado

    const valorParaConverter = document.getElementById('valorEmReal')
    const valorJaConvertido = document.getElementById('ValorConvertidoDolar')

    console.log(moedaSelecionada.value)

    const dolarHoje = 5.2
    const rmbHoje = 0.69
    const wonHoje = 0.37
    const ieneHoje = 0.35



    if(moedaSelecionada.value == "dolar"){
        valorJaConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(valorInput / dolarHoje) 
        //aqui vamos colocar na tela, no html, o valor já convertido, em dolar, já formatado

    }
    if(moedaSelecionada.value == "yuan"){
        valorJaConvertido.innerHTML = new Intl.NumberFormat('zh-CN', {
            style: "currency",
            currency: "CNY"
        }).format(valorInput / rmbHoje) 
        //aqui vamos colocar na tela, no html, o valor já convertido, em yuan, já formatado

    }
    if(moedaSelecionada.value == "won"){
        valorJaConvertido.innerHTML = new Intl.NumberFormat('ko-KR', {
            style: "currency",
            currency: "KRW"
        }).format(valorInput / wonHoje) 
        //aqui vamos colocar na tela, no html, o valor já convertido, em won, já formatado

    }
    if(moedaSelecionada.value == "iene"){
        valorJaConvertido.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: "currency",
            currency: "JPY"
        }).format(valorInput / ieneHoje) 
        //aqui vamos colocar na tela, no html, o valor já convertido, em iene, já formatado

    }


    valorParaConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(valorInput) 
     //aqui vamos colocar na tela, no html, o valor que foi digitado no input, em moeda br, já formatado

    



}

function mudançaDeMoeda (){

    const nomeDaMoeda = document.getElementById('nome-moeda')
    const imagemDaMoeda = document.getElementById('imagem-moeda')

    if(moedaSelecionada.value == "dolar"){

        nomeDaMoeda.innerHTML = "US$ Dólar Americano"
        imagemDaMoeda.src = './img/eua.png'

    }
    if(moedaSelecionada.value == "yuan"){

        nomeDaMoeda.innerHTML = "元 Yuan"
        imagemDaMoeda.src = './img/china.png'
    }
    if(moedaSelecionada.value == "won"){

        nomeDaMoeda.innerHTML = "₩ Won"
        imagemDaMoeda.src = './img/coreia-do-sul.png'

    }
    if(moedaSelecionada.value == "iene"){

        nomeDaMoeda.innerHTML = "¥ Iene"
        imagemDaMoeda.src = './img/japao.png'

    }

    
    converterValores()

}

moedaSelecionada.addEventListener('change', mudançaDeMoeda) //adiciona um evento ouvinte para quando trocar a moeda dentro do select

meuBotao.addEventListener('click', converterValores) //adiciona um evento ouvinte de click no botão principal

