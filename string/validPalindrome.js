function validPalindrome(str){

let reverse = ''
for( let i=str.length-1; i>=0;i--){
reverse += str[i]


}
if(str===reverse){
    return true
}
return false
}

console.log(validPalindrome("madam")); // true

console.log(validPalindrome("hello")); // false

console.log(validPalindrome("racecar")); // true