document.querySelector('.paramero-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1){
//tamanhoSenha = tamanhoSenha - 1;
    }
numeroSenha.textContent = tamanhoSenha;
gerasenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
    //tamanhoSenha = tamanhoSenha + 1;
    }
numeroSenha.textContent = tamanhoSenha;
gerasenha();
}
// codigo omitido
const camposenha = document.querySelector( '#campo-senha');
const letrasmaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function gerasenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroaleatorio = Math.random()*letrasmaiusculas.length;
    numeroaleatorio = math.floor(numeroaleatorio);
    senha = senha + letrasmaiusculas[numeroaleatorio];
    }
}
camposenha.value = senha;
