// Input:

// [0,0,1,1,1,2,2,3,3,4]

// Output:

// 5

// Array:

// [0,1,2,3,4,_,_,_,_,_]




function removeDublicate(num){
if(num.length===0){
        return 0
}
let slow = 0
for(let fast=1; fast <num.length;fast++){
    if(num[slow] !== num[fast]){
        slow++
        num[slow] = num[fast]
    }
}
return slow+1
}


let nums = [0,0,1,1,1,2,2,3,3,4];

let k = removeDublicate(nums);

console.log(k);                 // 5

console.log(nums);              // [0,1,2,3,4,2,2,3,3,4]

console.log(nums.slice(0, k));  // [0,1,2,3,4]

