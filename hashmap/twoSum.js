const array = [2, 7, 2, 15];

function twoSum(num, target) {
let map = {}
for(let i=0;i<num.length;i++){
    let current = num[i]
    let compliment = target-current
if(compliment in map){
    return [map[compliment],i]
}
map[current] = i


}
return []

   
}
console.log(twoSum(array, 17));