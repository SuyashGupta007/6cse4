// //strings
//         //01234
// var str = " King "
//         //-4 -3 -2 -1
// var strn = "javascript can DSA be used in DSA"
// console.log(str.length);
// console.log(str.charAt(2));
// console.log(str.charCodeAt(0))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.trim())
// console.log(strn.split(" "))
// console.log(str.concat(strn))
// console.log(strn.indexOf("DSA"))
// console.log(strn.includes("C++"))
// console.log(str.slice(0,3))
// console.log(strn.replaceAll("DSA","C++"))
// console.log(strn.replace("DSA","C++"))




// //array

// let names=['rai','raj','sravan,','pavan']
// let names2=['vishnu','sparsh']

// let namecopy  = [...names]//split

// console.log(namecopy.pop())
// console.log(namecopy)
// console.log(names)

// //toString()
// console.log(names.toString())

// //join 
// console.log(names.join(" and "))

// //concat
// console.log(names.concat(names2))

// // //splice
// //it mutate  the actuaal array
// // let stringname=names.splice(0,2)
// //                            //  (khase se start kerna hai,how many)
// // console.log(stringname)
// // console.log(names)

// //slice
// // it do not mutate the actual array
// stringname=names.slice(0,2)
//                            //  (khase se start kerna hai,how many)
// console.log(stringname)
// console.log(names)

// //flat
// var num =[1,2,3,4,[5,6,[7,8,9]],10]
// var num2= num.flat(2)

// //arrow functions
// // ()=>{}
// //forEach
//  let count = 0;
//  names.forEach((n) =>{
//    count++
//  })
//  console.log(count);

//  let double = num2.map((n)=>{
  
//     return n*n;
//  })
//  console.log(double)

//  let reduct = num2.reduce((total,curr)=>{
//     return total+curr
//  })
//  console.log(reduct)

//  let fil = num2.filter((n)=> n>5)
//  console.log(fil)
 
//  let obj = {
//         "firstName":"Suyash",
//         "lastname":"Gupta",
//         "Phno":7080249355,
//         "sayHello":function(){
//            console.log("hii ")
//         },
//         "Eat":()=>{console.log("I like to eat Indian food")}
//  }
// //  console.log(obj.firstName)
// //  console.log(obj.sayHello())
//  for(var key in obj){
//     //console.log(obj[key]) 
//    //  console.log(key + obj[key])
//    console.log(`${key} : ${obj[key]}`)     
//  }

 //function statment
a()
//b()
 function a(){
        console.log("hii i am a")
 }
 
 //function expression

 var b =  function  xyz(){
        console.log("hii i am b")
 }
 //b()

//  function(){

//  }
//xyz()

// var square = function(param1){
//        return function(){
//              return param1*param1
//        }
// }

// console.log(square(2)())

//async js 
//callbacks
//promises
//async await
//fetch 
//axios
//XMLHttpsRequest()


//callbacks
// console.log("hiiii")
// setTimeout(function(){
//        console.log("hiii2")
// },5000)
// console.log("hiii3")
// var ans = fetch(`https://randomuser.me/api/`)
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// var promises = new Promise((resolve,reject)=>{
//        if(false){
//               resolve("Success")
//        }else{
//               reject("err")
//        }

// })

// promises.then((result)=>{
//        console.log("bhai resolve ho gaya",result)
// }).catch((err)=>{
//        console.log("bhai resolve nhi hua ",err)
// })
// console.log(promises)

 async function user(){
var ans = await  fetch(`https://randomuser.me/api/`)
var data = await ans.json()
console.log(data)
}
user()