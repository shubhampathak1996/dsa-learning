const string = ["a","b","a","c","a","b"]


function NonRepeatingNumber(str){
    let map = {}
    let char = ''
 for(let i=0;i<str.length;i++){
let current  = str[i]

if(map[current]){
map[current]++
}else {

            map[current] = 1;

        }
    }
for(let i=0;i<str.length;i++){
    let current = str[i]
 if(map[current] ===1){
    return current
 }
}
return null
 }




console.log(NonRepeatingNumber(string))