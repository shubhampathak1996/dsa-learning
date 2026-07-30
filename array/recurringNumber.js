const arr = [10, 20, 30,30, 40,  50];

function recurringNumber(num){

for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i] == num[j]){
            return num[i]
        }
    }
}
return undefined
}

console.log(recurringNumber(arr)); // 20