let num = [1, 2 ,5 ,4 ,7]
num.push(6)
num.sort()
num[7] = 8
console.log(num)
for (let c in num) {
  console.log(num[c])
}