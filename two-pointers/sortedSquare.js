function sortedSquares(nums) {

let left = 0
let right = nums.length-1
let result = new Array (nums.length)
let index = nums.length-1

while(left<=right){
    let leftSquare = nums[left] * nums[left]
    let rightSqure = nums[right] * nums[right]
    if(leftSquare > rightSqure){
        result[index] = leftSquare
        left++

    }else{
        result[index] = rightSqure
        right--
    }
            index--;
}
  return result;
}


console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]

console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]