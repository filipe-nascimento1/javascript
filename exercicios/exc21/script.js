var number = []
var finishTest = false
function add(){
  let numberAdd = document.querySelector("input#numbers").value
  if (number.includes(numberAdd)){
    alert('Número já adicionado.')
  } else if (numberAdd < 1 || numberAdd > 100){
    alert('Número fora do determinado.')
  } else{
    number.push(numberAdd)
    const list = document.querySelector('ul')
    const listNumbers = document.createElement('li')
    listNumbers.textContent = numberAdd + ' adicionado'
    list.appendChild(listNumbers)
  }
  if (finishTest) {
    document.querySelector('button#add').innerText = 'Atualizar'
    finish()
  }
  //console.log(number)
}

function finish(){
  number.sort((a, b) => a - b)
  const resp = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4')]
  
  resp[0].innerHTML = `Temos ao todo ${number.length} números cadastrados`
  resp[1].innerText = `O maior número é ${number[number.length - 1]}`
  resp[2].innerText = `O menor número e ${number[0]}`
  var soma = 0
  for (let c = number.length -1; c >= 0; c--){
    soma += Number(number[c])
    console.log(soma)
  }
  resp[3].innerText = `A soma de todos é ${soma}`
  resp[4].innerText = `A média dos valores é ${soma/number.length}`
  finishTest = true
}