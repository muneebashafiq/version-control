// // var a = 9;

// function app(){
//     let a = 10
//     var b = 10
//     console.log("value of a as initial ",a)
//     console.log("value of b as initial ",b)

//     // let a = 30
//     // var b =20
//     console.log(b)
//     // console.log(a)
//     // if(a>0){
//     //     console.log("Positive number")
//     // }

//     if(a>0){
//         let a = 30;
//         var b = 20
//         console.log("value of a inside if block:", a)
//         console.log("value of b inside if block:", b)
//     }
//     console.log("value of a outside if block:", a)
//     console.log("value of b outside if block:", b)
// }

// // console.log(a)
// app()

declarationfunction()
function declarationfunction(){
    console.log("This is function declaration")
}
// functionexpression()
const functionexpression = function (){
    console.log("This is function expression")
}
// arrowfunction()
const arrowfunction = () =>{
    console.log("This is arrow function")
}
// greet("Muneeba", function(name) {
//     console.log("Hello " + name);
// });
function greet(name, callback) {
  callback(name);
}

greet("Muneeba", function(name) {
  console.log("Hello " + name);
});

