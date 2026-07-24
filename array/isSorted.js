const newArray = [20,40,50,60,20,30]

function isSorted (num){

let isSorted = true;
for(i=0; i<num.length-1;i++){
    if(num[i] > num[i+1]){
       isSorted = false
    }
}
    return isSorted;
}
console.log(isSorted(newArray))