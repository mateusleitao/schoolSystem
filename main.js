// EventListener pra pegar o valor da inputBox assim que o botao for clicado
document
    .getElementById("getInput")
    .addEventListener("click", function getName() {
        //Objeto contendo os dados dos alunos
        let alunos = {
            aluno1: {
                nome: "Mateus",
                nota1: 7,
                nota2: 7,
            },
            aluno2: {
                nome: "Leonardo",
                nota1: 8,
                nota2: 9,
            },
            aluno3: {
                nome: "Ferreira",
                nota1: 4,
                nota2: 6,
            },
        };

        //Variavel que vai receber o que foi inserido na inputBox
        let inputName = document.getElementById("inputName").value;
        //Checando se o valor inserido na inputbox é igual a "Mateus"
        if (inputName === alunos.aluno1.nome) {
            //Se o valor inserido for "Mateus" vou passar os parametros pra funçao de calculo
            calc(alunos.aluno1.nota1, alunos.aluno1.nota2, alunos.aluno1.nome);
        } //Checando se o valor inserido na inputbox é igual a "Leonardo"
        else if (inputName === alunos.aluno2.nome) {
            //Se o valor inserido for "Leonardo" vou passar os parametros pra funçao de calculo
            calc(alunos.aluno2.nota1, alunos.aluno2.nota2, alunos.aluno2.nome);
        } //Checando se o valor inserido na inputbox é igual a "Ferreira"
        else if (inputName === alunos.aluno3.nome) {
            //Se o valor inserido for "Ferreira" vou passar os parametros pra funçao de calculo
            calc(alunos.aluno3.nota1, alunos.aluno3.nota2, alunos.aluno3.nome);
        } 
        else {
            //Se o valor inserido nao for nenhum dos citados acima vai aparecer uma alerta requisitando um valor valido
            alert("INSIRA UM NOME VALIDO");
        }
        //Chamando a funçao de calculo pra ela ocorrer no click também
        calc();
    });

//funçao que vai calcular a média da nota do aluno usando os parametros dados nas checagens anteriores
function calc(nota1, nota2, aluno) {
    //formula que vai usar os dados pra calcular a média
    const total = (nota1 + nota2) / 2;
    //variavel que vai receber um texto seguido do resultado da formula "total"
    let resultado = "sua nota total foi " + total;
    //Textos usando alguns dos dados coletados pelas variaveis
    const parabens = "Parabens " + aluno + ", " + resultado;
    const reprovado = "Voce foi reprovado," + aluno + " ,boa sorte na proxima";

    //If statement que checa se a nota foi abaixo ou acima da média 6
    if (total >= 6.0) {
        createElement(parabens);
    } else if (total <= 5.9) {
        createElement(reprovado);
    }
}

//Funçao que vai criar o elemento onde o resultado vai ser mostrado (</p>) e também vai fazer a quebra de linhas (<br>)
function createElement(resultado) {
    let text = document.createTextNode(resultado);
    let br = document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(text);
}
