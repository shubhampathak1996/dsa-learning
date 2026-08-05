// Input:
// numbers = [2,7,11,15]
// target = 9

// Output:
// [1,2]



function twoSum(numbers, target){


let left = 0;
let right = numbers.length-1;
while(left< right){
    let sum = numbers[left] + numbers[right]
    if(sum==target){
        return [left+1,right+1]
    }else if(sum < target){
        left++
    }else if(sum>target){
        right--
    }
}
return 'end'
}

console.log(twoSum([2,7,11,15], 9));     // [1,2]

console.log(twoSum([2,3,4], 6));         // [1,3]

console.log(twoSum([-1,0], -1));         // [1,2]

console.log(twoSum([1,2,3,4,6], 10));    // [4,5]