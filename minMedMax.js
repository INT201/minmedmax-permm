const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let arr = [n1,n2,n3]
  let max = n2
  let mid = n2
  let min = n2

  for(let number of arr){
    if(number > max)
      max = number
    
    if(number < min)
      min = number
  }
  for(let number of arr){
    if(number<max && number>min)
      mid = number
  }
  return {min,mid,max}
}
module.exports = minMedMax
