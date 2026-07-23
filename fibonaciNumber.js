function Fibonacci (num){
let first = 0
let second = 1
    for(let i=2;i<=num;i++){
let next = first +second
first = second
console.log(first)
// second = next
// console.log(second)
    }
 
return second
}
console.log(Fibonacci(10))