const input = [10,20,30,40,80,70,50];

function reverseArray(num) {

    let reverse = [];

    for (let i = num.length - 1; i >= 0; i--) {

          reverse.push(num[i]);

    }

    return reverse;

}

console.log(reverseArray(input));