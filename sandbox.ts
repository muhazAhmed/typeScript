let char = "Muhaz"

// char = 10
char = "Hello"
// Here we can change the type of chareter only to chareter itelf.

let number = 10

number = 30
// number = "Hello"
//same goes for number (Int) also

//but the best this about typescript is, we can handle few edge cases before execution itself like:

const solution = (number) => {
  return number + 10
}
console.log(solution(number))

//this is usual js code....

const result = (n : number) => {
  return n + "hello"
}
console.log(result("world"))
//here you can see that we are getting error. This is the benifit of typeScript