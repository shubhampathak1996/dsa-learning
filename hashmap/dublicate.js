

// [1,2,3,1]

// Output:

// true

function duplicate(num) {

    const map = {};

    for (let i = 0; i < num.length; i++) {

        let current = num[i];

        if (map[current]) {

            return true;

        }

        map[current] = true;
    return current

    }

    return false;

}

console.log(duplicate([10,2,3,10]));