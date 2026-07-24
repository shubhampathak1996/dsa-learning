const input = [10,20,30,40,50]

function sumOfArray(num){
 let sum = 0
    for(let i=0;i<num.length;i++){
       
        sum = sum+num[i]
    }
return sum
}
console.log(sumOfArray(input))