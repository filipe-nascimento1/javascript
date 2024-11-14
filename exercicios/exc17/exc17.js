function toCount(){
  // area do entrada
  let start = Number(document.querySelector('input#start').value)
  const end = Number(document.querySelector('input#end').value)
  let steps = Number(document.querySelector('input#steps').value)
  // area do saida
  const stats = document.querySelector('p#stats')
  const result = document.querySelector('p#result')
  //verificador de erros
  let erro = false
  if (start === '' || end === '' || steps === '') {
    erro = true
    alert('[ERRO] A valores faltando')
  } else if (steps == 0) {
    steps = 1
    alert('[ERRO] 0 não é um passo valido, utilizaremos o passo 1')
  }
  result.innerHTML = ''
  if (!erro){
    stats.innerHTML = 'Contando:'
    while(start <= end){
      result.innerHTML += `${start} &#x1F449`
      start += steps
    }
    result.innerHTML += '&#x1F3F3'
  }
}