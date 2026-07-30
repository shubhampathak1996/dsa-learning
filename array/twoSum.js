const array = [2, 7, 2, 15];



// Target = 9

// Output:

// [0,1]



function twoSum(num,target){
 
    for(let i=0;i<num.length; i++){
        for(let j=i+1; j<num.length;j++){
            if(num[i] + num[j] == target){
               return [i, j];
            }
        }
    }
return [];
}



console.log(twoSum(array, 9));