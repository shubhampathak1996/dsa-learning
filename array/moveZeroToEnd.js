function moveZeroes(nums) {
let result = []
let moveZero= 0;
for(let i=0; i<nums.length; i++){
    if(nums[i] !==0){
       result.push(nums[i]);
    }else{
        moveZero++
    }
  
}

while (moveZero > 0){
    result.push(0)
    moveZero--
}
   return result;
}

console.log(moveZeroes([0,1,0,3,12]));