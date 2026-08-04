const array = [2, 7, 2, 15];

function twoSum(num, target) {

    for (let i = 0; i < num.length; i++) {

        for (let j = i + 1; j < num.length; j++) {

            if (num[i] + num[j] == target) {
console.log(i,j)
                return [i, j];

            }

        }

    }

    return [];

}

console.log(twoSum(array, 9));