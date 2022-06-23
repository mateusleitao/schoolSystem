class Person {

    constructor(nome, aval1, aval2) {
        this.name = nome
        this.aval1 = aval1
        this.aval2 = aval2  
        this.total = ((parseInt(aval1) + parseInt(aval2)) / 2)

    }
    calc() {

        if (this.total >= 6 && this.total <= 10) {
            let text = document.createTextNode('Parabens ' + this.name + ' voce foi aprovado com uma media no valor de: ' + this.total)
            document.body.appendChild(text)
            console.log(text)
        } else if (this.total <= 5.9 && this.total >= 0) {
            let text = document.createTextNode('Que pena ' + this.name + ' voce foi reprovado com uma media de: ' + this.total + ' boa sorte na proxima')
            document.body.appendChild(text)
            console.log(text)
        } else{
            alert('INSIRA UM NUMERO VALIDO')
            return
        }
        
    }
}
var button = document.getElementById('getInput')
button.addEventListener('click', function(event) {

let nome = document.getElementById('inputName').value;
let aval1 = document.getElementById('inputAval1').value;
let aval2 = document.getElementById('inputAval2').value
let br = document.createElement('br')
document.body.appendChild(br)

let alumn = new Person(nome, aval1, aval2)
 alumn.calc()

})