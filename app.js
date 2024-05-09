let numerosBanidos = [];
let quantidadeBans = numerosBanidos.lenght;
  function numeroAleatorio(){
   let numeroSorteado = parseInt(Math.random()*900 + 100);
   if(quantidadeBans == 900){
    numerosBanidos = []
   }
   if(numerosBanidos.includes(numeroSorteado)){
    return numeroAleatorio()
   } else {
        console.log(numerosBanidos)
        numerosBanidos.push(numeroSorteado)
        return numeroSorteado
   }
}

 function EscreverNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
 function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ""
 }
 function reiniciarJogo(){
    resposta = numeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
    tentativas = 1;
    rebirth++;
    mensagemReiniciar();
    console.log(resposta)
 }
 function mensagemReiniciar(){
    EscreverNaTela("h1","Quantos earnings o cauã vai ganhar " + rebirth + ".0" );
    EscreverNaTela("p","Escolha entre 100-1000$");
 }
let rebirth = 1;
let resposta = numeroAleatorio();
console.log(resposta);
let tentativas = 1;
 function verificarChute() { 
    let chute = document.querySelector('input').value;
    let mensagemTentativas = tentativas > 1 ? ' tentativas' : ' tentativa';

        if(chute == resposta){
            EscreverNaTela('h1', "Você  previu com sucesso os earnings do cauã");
            EscreverNaTela('p',"Você acertou em " + tentativas + mensagemTentativas + ".");
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
            else{
                if(chute > resposta){
                        EscreverNaTela('p','Muito alto, tenta mais baixo.');
                }
                else{
                    EscreverNaTela('p','Muito baixo, chuta mais alto');
                }
                tentativas++;
                limparCampo();
                console.log(tentativas);
            
}}

EscreverNaTela("h1","Quantos earnings o cauã vai ganhar" );
EscreverNaTela("p","Escolha entre 100-1000$");