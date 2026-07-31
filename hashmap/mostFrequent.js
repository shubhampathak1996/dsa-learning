const number = [10,20,10,30,10,20]


function mostFrequentNumber(fre){
    let map = {}
    let mostFrequentNum = fre[0];
    let maxcount = 0

    for( let i=0;i<fre.length;i++){
        let current = fre[i]
        if(map[current]){
            map[current]++
           
        }else{
            map[current] = 1
        }
    }
    for(let i=0; i<fre.length;i++){
        let current = fre[i]
        if(map[current]>maxcount)  {
        maxcount = map[current]

mostFrequentNum = current   
    }
    }
  
return [mostFrequentNum,maxcount]



}

console.log(mostFrequentNumber(number))