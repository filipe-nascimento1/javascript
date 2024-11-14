function build(){
  const num = document.querySelector('input#number').value
  const tableMult = document.querySelector('select#result')
  
  if(num.length != 0){
    tableMult.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      console.log(`${num} x ${c} = ${num * c}`)
      let item = document.createElement('option')
      item.text = `${num} x ${c} = ${num * c}`
      tableMult.appendChild(item)
    }
  } else{
    alert('Digite um numero.')
  }
}