const input =  [4, 8, 2, 10, 6]

function maxElement(num){
    let ele = num[0];
    for(var i=0; i<=num.length;i++){
       
   if (num[i] > ele) {

    ele = num[i];

}
    }
    return ele

}

console.log(maxElement(input))