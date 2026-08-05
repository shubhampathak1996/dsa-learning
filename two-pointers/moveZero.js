
// Input:

// [0,1,0,3,12]

// Output:

// [1,3,12,0,0]
function moveZero(num){
 let slow = 0

for (let fast= 0;fast<num.length; fast++){
    if(num[fast] !==0){
        let temp = num[slow]
        num[slow] = num[fast]
        num[fast] = temp
slow++        
    }
}
return num



}
console.log(moveZero([0,1,0,3,12]))
