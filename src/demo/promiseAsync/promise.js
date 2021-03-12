// let func = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("inPromise")
//
//         let m = 1
//         if (m / 2 > 1) {
//             resolve("success message")
//         } else {
//             reject("error message")
//         }
//         console.log("inPromise1")
//     }, 2000)
// })
// func.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })
//
// async function f(){
//     return "hello world"
// }
// f().then(v=>console.log(v))

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(123)
            resolve("data")
        }, ms)
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms).then((data)=>{
        console.log(data)
    })
    console.log(value)
}
asyncPrint("name", 2000)                         // 2秒后    123,name



// function asyncPrint(value,ms){
//     timeout(ms).then((data)=>{
//         console.log(data)
//     })
//     console.log(value)
// }
// asyncPrint("name",2000)                         //  name    2秒后     123。实现等123输出了再去出书name，按上下顺序写的同步执行
