// function named `greet` that prints "Hello, World!"

function greet(){
  let word="Hello, World!"
  console.log(word)
}
greet()

//function named `addNumbers` that takes two parameters, `a` and `b`

function addNumbers(a,b){
  let sum=a+b
  console.log(sum)
}
addNumbers(10,20)
addNumbers(5,7)

//a function named `multiply` that takes two parameters, `x` and `y`.Inside the function, return the product of `x` and `y`.
function multiply(x,y){
  let multi=x*y
  return multi
}
let result=multiply(11,20)
console.log(result)

//combing functions
function calculateRectangleArea(length,width){
  let result=multiply(length,width)//area of rectangle=length*width
  return result
}
let Area=calculateRectangleArea(10,5)
console.log(Area)

//default parameters

function greetUser(name= 'Guest'){
  console.log(`Hello, ${name}!`)
}
greetUser()
greetUser('Sai Narendra')