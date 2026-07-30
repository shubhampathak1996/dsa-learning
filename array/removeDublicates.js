const array = [1,2,2,3,4,4,5]

function removeDublicate(num){
    let result = []

for(let i=0; i<num.length;i++){
  if(!result.includes(num[i])){
    result.push(num[i])
  }
}
return result

}

console.log(removeDublicate(array))