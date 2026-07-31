function frequency(arr) {

let map = {}
for(let i=0; i<arr.length; i++){
    let current = arr[i]
 if(map[current] ){
    map[current]++
 }else{
    map[current] = 1
 }
}
return map


}

console.log(frequency([10,20,10,30,20,10]))