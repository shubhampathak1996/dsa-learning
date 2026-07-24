const input = [1, 2, 3, 5];

function findMissing(num) {

let missingNumber = 0;
for(let i=0;i<num.length;i++){
    if(num[i+1] -num[i] > 1){
    missingNumber = num[i] +1
    }
}
return missingNumber
}

console.log(findMissing(input));