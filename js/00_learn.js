// alert("Hello World")

// console.log('Legal!!') // ; é opcional
// console.log(1 + 3)
// /* Comentário bloco */

// {
//     /* Bloco de código */
//     console.log("Passo #01")
//     console.log("Passo #02")
// }

// // Dados e Variáveis
// var x = 10 // de escopo global - acessível fora do bloco onde foi criada
// let y = 2.67  // moderna (por padrão só acessível no escopo local)
// z = 3.8

// var precoFinal = x + y // JS é Case Sensitive
// console.log(precoFinal)

// let preco = 19.90
// let desconto = 0.4
// let precoComDesconto = preco * (1 - desconto)

// let nome = "Caderno" // String
// let categoria = "Papelaria"
// console.log("Produto: " + nome
//     + ", Categoria: " + categoria
//     + ", Preço: " + preco
//     + ", Desconto: " + desconto)

// // Verificando tipos (number, boolean, string, Null, Undefined)
// console.log(typeof 31) // só number, ñ diferencia int e flutuante
// console.log(typeof 31.5)

// let estaChovendo = true
// console.log(typeof estaChovendo)
// console.log(typeof "Teste")

// estaChovendo = false

// let c = undefined
// console.log(c)
// c = null
// console.log(c)

// const A = 3 // constante (não pode ser reatribuida (quase imutável)) - convensão maiúscula

// const PI = 3.141592
// let raio = 10
// // let areaCirc = PI * raio * raio
// let areaCirc = Math.PI * raio * raio
// console.log("O valor da área é " + areaCirc + "m2.")

// let a = 7
// let b = 94

// let aux = a
// a = b
// b = aux
// // [a, b] = [b, a]

// console.log(a)
// console.log(b)

// // + adição
// // - subtração
// // * multiplicação
// // / divisão
// // % módulo (resto)
// // ++ incremento
// // -- decremento

// let x = 30

// console.log(x)

// let y = --x // decrementa/incrementa antes de atribuir

// console.log(x)
// console.log(y)

// let z = x-- // incrementa/incrementa após atribuir

// console.log(z)

// // +=  -=  *=  /=  %=

// // ==   igualdade
// // ===  igualdade (valor e tipo)
// // != 	diferente de 
// // !==	diferente de (valor e tipo)
// // <		menor que
// // >		maior que
// // <= 	menor ou igual a
// // >=		meior ou igual a


// // &&		e
// // ||		ou 
// // !		não

// let a = true
// let b = false

// console.log(a && b)
// console.log(a || b)

// console.log(!a)

// let a = "5"
// let b = "2.5"
// let c = parseInt(a) + parseFloat(b)
// console.log(c)

// let nome = prompt("Qual seu nome?")
// alert("Bom dia, " + nome + "!")


// let idade = 18
// if (idade >= 18 && idade <= 60) {
// 	console.log("Maior de idade!")
// 	console.log("Votação obrigatória!")
// } else if (idade < 18 && idade >= 16){
// 	console.log("Menor de idade")
// 	console.log("Votação opcional!")
// } else if (idade > 60) {
// 	console.log("Maior de idade")
// 	console.log("Votação opcional!")
// } else {
// 	console.log("Menor de idade")
// 	console.log("Ñ pode votar!")
// }

// // operador ternário (? : )
// idade = 17 

// let maioridade = idade >= 18 ? 'sim' : 'não'

// console.log("Maior de idade? " + maioridade)


// let numero = 1

// switch (numero) {
// 	case 1:
		
// 		break;

// 	case 2:
		
// 		break;

// 	default:
// 		break;
// }

// for (let i = 0; i <= 5; i++){
	
// }

// let i = 0
// while (i<=5) {

//	i++;
	
// }

// let aleatorio = Math.random() * 100

// pessoas = new Array("Vitor", "Josi", "Arthur", "Ana")

// console.log(pessoas.length)

// pessoas = ["Vitor", "Josi", "Arthur", "Ana"]

// for (let i = 0; i < pessoas.length; i++){
// 	console.log(pessoas[i])
// }

// for (let indice in pessoas){
// 	console.log(pessoas[indice])
// }

// for (let pessoa of pessoas) {
// 	console.log(pessoa)
// }

// function media(nota1=3, nota2=2) {
// 	return (nota1 + nota2) / 2
// }

// m = media(7, 8)

// console.log(m)

// func = media // func recebe a função completa e ñ apenas seu retorno

// console.log(func(5, 9))

// // função anônima
// let media2 = function (nota1=3, nota2=2) { return (nota1 + nota2) / 2}

// console.log(media(9, 8))

// // Arrow function (=>)

// let media3 = (nota1=3, nota2=2) => { return (nota1 + nota2) / 2 }

// console.log(media(9, 8))

// // OBJETOS (dicionários chave:valor)

// let aluno = new Object()  // cria obj vazio

// let aluno = {}

// let aluno = {nome: "Vitor", matricula:"9876", notas: [5.6, 9.1]}

// console.log(aluno)
// console.log(aluno["nome"], aluno["notas"][1])

// aluno.cpf = "695..." // add campo

// console.log(aluno)

// aluno["curso"] = "Compitação" // add campo

// console.log(aluno)

// // MÉTODO DE OBJETOS
// var calcMedia = function(){
// 	return (this.notas[0] + this.notas[1]) / 2
// }

// let aluno = {
// 	nome: "Vitor", 
// 	matricula:"9876", 
// 	notas: [5.6, 9.1],
// 	media: calcMedia
// }

// let aluno1 = {
// 	nome: "Fulano", 
// 	matricula:"9876", 
// 	notas: [6.0, 4.3],
// 	media: calcMedia
// }

// console.log(aluno.media())
// console.log(aluno1.media())

// // Criando objetos a partir de funções
// function criarAluno(nome, n1, n2) {
// 	return {
// 		nome: nome,
// 		notas: [n1, n2],
// 		media: function () {
// 			return (this.notas[0] + this.notas[1]) / 2
// 		}
// 	}
// }

// var turma = [
// 	criarAluno("Vitor", 8, 7.2),
// 	criarAluno("Josi", 4, 9.5),
// 	criarAluno("Arthur", 7.8, 6.4)
// ]

// var aluno = turma[2]

// console.log(aluno, aluno.media())

// turma.forEach(function (e) {
// 	console.log(e.nome, e.notas, e.media())
// })

// for (let i=0; i<turma.length; i++){
// 	console.log(turma[i].nome, turma[i].notas, turma[i].media())
// }

// for (var aluno of turma){
// 	console.log(aluno.nome, aluno.notas, aluno.media())
// }


// // CONSRTUTOR DE OBJETOS
// function aluno(nome, n1, n2) {
// 	this.nome = nome
// 	this.notas = [n1, n2]
// 	this.media = function(){
// 		return (this.notas[0] + this.notas[1])/2
// 	}	
// }

// let a1 = new aluno("Vitor", 8, 7.2)

// console.log(a1.nome, a1.notas, a1.media())

// var turma = [
// 	new aluno("Vitor", 8, 7.2),
// 	new aluno("Josi", 4, 9.5),
// 	new aluno("Arthur", 7.8, 6.4)
// ]

// turma.forEach(function(e){
// 	console.log(e.nome, e.notas, e.media())
// })


// // DATAS (no JS datas são objetos)

// // let d = new Date(year, month, day, hours, minutes, seconts, milliseconds)

// let d = new Date() // atual
// console.log(d)

// d = new Date(2023, 8, 25)
// console.log(d)
// // mes == 0 a 11 (0=jan, 1=fev, ..., 10=nov, 11=dez)

// d = new Date("sep 25 2023 16:04:27")
// console.log(d)

// d = new Date("09 25 2023 16:04:27")
// console.log(d)

// d = new Date("05/19/1998")
// console.log(d)

// d = new Date(77999999393) // nº milisegundos desde 01/01/1970 00:00
// console.log(d)

// // ​Métodos para manipular datas:
// // getDate()	// retorna dia do mes (1-31)
// // getDay()	// retorna dia da semana (0-6)
// // getFullYear()	// retorna o ano
// // getHours()	// retorna a hora (0-23)
// // getMilliseconds() // retorna os milisegundos (0-999)
// // getMinutes()	Returna os minutos (0-59)
// // getMonth()	// retorna o mes (0-11)
// // getSeconds()	// retorna os segundos (0-59)
// // getTime()	// retorna o nº de milisegundos desde 01/01/1970 00:00 até a data
// // getTimezoneOffset()	// retorna a diferença entre a hora UTC e a hora local em minutos
// // getUTCDate()	Returns the day of the month, according to universal time (1-31)
// // getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
// // getUTCFullYear()	Returns the year, according to universal time
// // getUTCHours()	Returns the hour, according to universal time (from 0-23)
// // getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
// // getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
// // getUTCMonth()	Returns the month, according to universal time (from 0-11)
// // getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
// // getYear()	Deprecated. Use the getFullYear() method instead
// // now()	Returns the number of milliseconds since midnight Jan 1, 1970
// // parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
// // setDate()	Sets the day of the month of a date object
// // setFullYear()	Sets the year of a date object
// // setHours()	Sets the hour of a date object
// // setMilliseconds()	Sets the milliseconds of a date object
// // setMinutes()	Set the minutes of a date object
// // setMonth()	Sets the month of a date object
// // setSeconds()	Sets the seconds of a date object
// // setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
// // setUTCDate()	Sets the day of the month of a date object, according to universal time
// // setUTCFullYear()	Sets the year of a date object, according to universal time
// // setUTCHours()	Sets the hour of a date object, according to universal time
// // setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
// // setUTCMinutes()	Set the minutes of a date object, according to universal time
// // setUTCMonth()	Sets the month of a date object, according to universal time
// // setUTCSeconds()	Set the seconds of a date object, according to universal time
// // setYear()	Deprecated. Use the setFullYear() method instead
// // toDateString()	Converts the date portion of a Date object into a readable string
// // toGMTString()	Deprecated. Use the toUTCString() method instead
// // toISOString()	Returns the date as a string, using the ISO standard
// // toJSON()	Returns the date as a string, formatted as a JSON date
// // toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
// // toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
// // toLocaleString()	Converts a Date object to a string, using locale conventions
// // toString()	Converts a Date object to a string
// // toTimeString()	Converts the time portion of a Date object to a string
// // toUTCString()	Converts a Date object to a string, according to universal time
// // UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
// // valueOf()	Returns the primitive value of a Date object

// INTEGRAÇÃO HTML


// window é o objeto padrão - PAI DE TODOS
// window.console.log("teste")
// window.alert("teste")

// document - representação da página como objeto
// DOM - document object model (tags html pode ser transformadas em objetos js)
// console.log(document.body)

// document.body.innerHTML = "teste" + document.body.innerHTML // insere 

// // acessar qualquer elemento a partir do body ou head
// let p1 = document.getElementById("p1")
// let cls_paragrafos = document.getElementsByClassName("paragrafo")

// // for (let p of cls_paragrafos){
// // 	console.log(p)
// // }

// let todos = document.getElementsByTagName("p")

// console.log(todos[0])

// // for (let p of todos){
// // 	console.log(p)
// // }


// // MODIFICANDO ELEMENTOS
// let p1 = document.getElementById("p1")
// p1.innerHTML = p1.innerHTML + ", novo conteúdo" // recebe um HTML (interpreta tags)
// p1.innerText = p1.innerHTML + ", mais conteúdo novo" // apresentação
// p1.textContent = p1.innerHTML + ", outro conteúdo novo" // 

// p1.className = ""

// let teste = p1.getAttribute("crieiagora")
// console.log(teste)

// p1.setAttribute("crieiagora", "qualquer coisa")

// teste = p1.getAttribute("crieiagora")
// console.log(teste)

// p1.setAttribute("novo_atributo", "bla bla")

// teste = p1.getAttribute("novo_atributo")
// console.log(teste)

// p1.style.backgroundColor = "green"

// ======================
// DOM Events



// conect FireBase JS
