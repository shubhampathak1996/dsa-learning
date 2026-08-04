// Input:

// s = "anagram"

// t = "nagaram"

// Output:

// true

s = "anagram"

t = "nagaram"

function isAnagram(s, t) {
if(s.length !==t.length){
    return false
}
const map = {}

for(let i=0; i<s.length; i++){
    let current = s[i]
    if(map[current]){
        map[current]++
    }else{
        map[current] = 1
    }
}
for(let i=0; i<t.length;i++){
      let current = t[i];
    if(!(current in map)){
        return false
    }
    map[current]--
    if(map[current] < 0){
    return false
}
}


return true


}


console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("aacc", "ccac"));       // false
console.log(isAnagram("shubham", "hsbuahm"));       // true