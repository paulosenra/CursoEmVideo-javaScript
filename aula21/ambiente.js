let num = [5,8,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if(pos == -1){
  console.log('O Valor não foi encontrado')
} else{
console.log(`O valor 8 está na posição ${pos}`)
}