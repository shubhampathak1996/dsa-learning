// Input:

// nums1 = [1,2,2,1]

// nums2 = [2,2]

// Output:

// [2]
// using included without using set 
// set for using qunique
// function intersection(nums1, nums2) {

// let map = {}
// let result = []

// for (let i = 0; i<nums1.length;i++){
//     let current = nums1[i]
//    map[nums1[i]] = true;
// }
// for(let i=0; i<nums2.length; i++){
//     let current = nums2[i]
//    if (current in map && !result.includes(current)) {

//             result.push(current);

//         }
// }
// return result
// }




// using set method

function intersection(nums1, nums2) {

let map = {}
let result = new Set()


for(let i=0; i<nums1.length;i++){
  map[nums1[i]] = true;
  console.log(map[nums1[i]])


}
for(let i=0; i<nums2.length;i++){
 let current = nums2[i]

 if(current in map){
    result.add(current)
 }


}


return [...result]

}






console.log(intersection([1,2,2,1], [2,2]));      // [2]

console.log(intersection([4,9,5], [9,4,9,8,4]));  // [4,9]