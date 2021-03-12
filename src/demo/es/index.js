// var arr1 = [1,2,4]
// var arr2 = [7,8,0]
// var arr3 = [...arr1,...arr2]
// arr3 = arr3.sort((x,y)=>{
//     return x-y
// })
// // console.log(arr3)


// var obj = {
//     name:"sanly",
//     firstname:'shi',
//     age:24
// }
// Object.keys(obj).map((item)=>{
//     // console.log(item)
// })
const s = new Set()
let m = [1,2,3,3,3,4,5]
let k = {name:'shi',age:19}
m.forEach((x)=>{s.add(x)})
for(let i of s){
    console.log(i);
}
for(let i of m){
    console.log(i);
}
for(let i in m){
    console.log(i);
}
const set1 = new Set([1,2,2,23,4])
console.log([...set1]);
console.log(m);