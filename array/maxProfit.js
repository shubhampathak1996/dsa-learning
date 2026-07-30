prices = [7,1,5,10,6,4]


function maxProfit(rupees){
  let maxProfit = 0;
for (let i=0;i<rupees.length;i++){
    for(let j=i+1; j<rupees.length; j++){

let profit = rupees[j] - rupees[i]
if(profit > maxProfit){
    maxProfit = profit
}
    }
  
}
  return maxProfit;
}


console.log(maxProfit(prices))