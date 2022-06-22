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
        } //Checando se o valor inserido na inputbox é igual a "Mateus"
        else if (inputName === alunos.aluno2.nome) {
            //Se o valor inserido for "Leonardo" vou passar os parametros pra funçao de calculo
            calc(alunos.aluno2.nota1, alunos.aluno2.nota2, alunos.aluno2.nome);
        } //Checando se o valor inserido na inputbox é igual a "Leonardo"
        else if (inputName === alunos.aluno3.nome) {
            //Se o valor inserido for "Leonardo" vou passar os parametros pra funçao de calculo
            calc(alunos.aluno3.nota1, alunos.aluno3.nota2, alunos.aluno3.nome);
        } 
        else {
            alert("INSIRA UM NOME VALIDO");
        }
        calc();
    });

function calc(nota1, nota2, aluno) {
    const total = (nota1 + nota2) / 2;
    let resultado = "sua nota total foi " + total;
    const notaTotal = total;
    const parabens = "Parabens " + aluno + ", " + resultado;
    const reprovado = "Voce foi reprovado," + aluno + " ,boa sorte na proxima";

    if (total >= 6.0) {
        createElement(parabens);
    } else if (total <= 5.9) {
        createElement(reprovado);
    }
}

function createElement(resultado) {
    let text = document.createTextNode(resultado);
    let br = document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(text);
}
