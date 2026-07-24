const input = [10, 20, 10, 30, 10, 40, 20,10,47,10,1,0,10,10,10];

const target = 10;

function countFrequency(num, target) {
let findTar = 0;
for(i =0; i<num.length;i++){
    if(num[i] === target){
        findTar++
    }
}
return findTar
}

console.log(countFrequency(input, target));