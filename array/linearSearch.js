const input = [100, 20, 100, 30, 100, 40, 20,100,47,100,1,100,100,100,100];

const target = 10;

function linearSearch(num, target) {

    for(let i=0; i<num.length;i++){
        if(num[i] === target){
            return 'Found'
        }
    }
    return 'Not Found'

}

console.log(linearSearch(input, target));