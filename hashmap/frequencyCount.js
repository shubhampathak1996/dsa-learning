const string = ["a","b","a","c","a","b"]


function frequencyCount(str){
let map = {}

for(let i=0;i<str.length;i++){
    let current = str[i]
    console.log(current)
    if(map[current]){
        map[current]++
    }else{
        map[current] = 1
    }
}

return map

}


console.log(frequencyCount(string))