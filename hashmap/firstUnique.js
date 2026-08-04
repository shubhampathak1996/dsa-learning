// Input:
// s = "leetcode"

// Output:



// 0


function firstUniqChar(s) {
let map = {}

for(let i=0;i < s.length; i++){
    let current = s[i]
if(map[current]){
    map[current]++
}else{
    map[current] = 1
}

}
for(let i=0;i < s.length; i++){
    let current = s[i]
  if(map[current] ===1){
    return i
  }
}
return -1

}


console.log(firstUniqChar("leetcode"));      // 0

console.log(firstUniqChar("loveleetcode"));  // 2

console.log(firstUniqChar("aabb"));          // -1