const input = [10, 20, 5, 30, 15];

function secondLargest(num) {
let largest = -Infinity
let secondLargest = -Infinity

for(let i=0; i<num.length; i++){
    if(num[i] > largest){
        secondLargest = largest
        largest = num[i]
    }
   else if (num[i] > secondLargest && num[i] !== largest) {

            secondLargest = num[i];

        }
}
   return secondLargest;
}

console.log(secondLargest(input));