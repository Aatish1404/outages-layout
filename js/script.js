
// Alert

function plusFunction (a,b){
    let sum = a + b;
    alert(sum);
}

// plusFunction (2,2)

// console

function plus2Function (a,b){
    let sum = a + b;
    console.log(sum);
}

// plus2Function (5,5)

// multiply

function multiply (a,b){
    let result = a * b;
    console.log(result);
}

// multiply(5,5)


// add multiply results

// function plus (a,b){
//     let results = a + b;
//     return results
// }

// function complicatedoperation(number_1, number_2){
//     let sum = addition(number_1,number_2)
//     let result =  multiply (sum, number_2)
//     return result
// }

// const value = complicatedoperation(5,8)
// console.log(value)


function readMyH1(){
  let result = document.getElementsByTagName('h1')
  let text = result[0].innerHTML
  console.log(text)
}

// readMyH1()


function addElements(){
    let number1 = document.getElementById('number1')
    let number2 = document.getElementById('number2')
    let display = document.getElementById('display')
    let x = parseInt(number1.innerHTML)
    let y = parseInt(number2.innerHTML)
    
    let result = plus2Function (x,y)
    display.innerHTML = result
    console.log(result)
}
 
addElements()