function validPalindrome(str) {

let left = 0;
let right = str.length-1

while(left < right){
    if(str[left] !== str[right]){
        return false
        
    }
    right--
    left++
}
return true


}




console.log(validPalindrome("madam"));     // true

console.log(validPalindrome("hello"));     // false

console.log(validPalindrome("racecar"));   // true

console.log(validPalindrome("abba"));      // true

console.log(validPalindrome("abcba"));     // true