// const number = [45,14,78,45,78,45,45,32,54,78]
// function playgorund (num){
// for (let i = 0; i <= number.length; i++) {
// console.log(num[i])
//     console.log("number " + i);

// }
// return num
// }


// console.log(playgorund(number))


// let num = 0
// while(num <= 100){
//     console.log(num)
//     num++
// }
// let i = 90;
// do{
//     console.log(i)
//     i++
// } while (i<100)

// const fruits = ['apple','rasberry', 'papaya','grapes']
// for(let shubham of fruits){
//     console.log(shubham)
// }


// const arr = [10, 20, 30];

// for (let index in arr) {

//     console.log(index);

// }

const arr = [10,20,30,40,50,60,70,80,90]

arr.forEach((value,index,array)=>{
    console.log('start')
    console.log(value,index,array)
    console.log('end')
})