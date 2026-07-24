const input = [10, 20, 5, 30, 15];

function largestDifference(num) {

   let largest = num[0]
   let smallest = num[0]
   for(let i=0; i<num.length;i++){
    if(num[i] > largest){
        largest = num[i]
    }
    if(num[i] < smallest){
        smallest = num[i]
    }
   }
   return largest-smallest


}

console.log(largestDifference(input));