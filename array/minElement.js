const input =  [4, 8, 2, 10, 6]

function minElement (num){

    let ele = num[0]
    for (let i=1; i<num.length;i++){
        if(num[i]<ele){
        ele = num[i]
        }
    }
return ele
}
console.log(minElement(input))