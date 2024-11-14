let contador = 1
const max = 10
const opcao = 2

if (opcao == 0){
  console.log('Você usou a opção while')
  while (contador <= max){
    console.log(contador)
    contador ++
  }
}else if (opcao == 1){
  console.log('Você usou a opção do while')
  do{
    console.log(contador)
    contador ++
  }while(contador <= max)
}else if (opcao == 2){
  console.log('Você usou a opção for')
  for (contador = 1; contador <= max ; contador ++) {
    console.log(contador)
  }
}