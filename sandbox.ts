//Arrays
let a = [ "hello", "world" ];

a.push("!")
// a.push(10)
//it shows error because we cat push only those data types which are aldready defined inside the array

// ex 2:
let num = [1,2,3]

num.push(4)
// num.push("hi")
// since hi is a string it is showing error

// ex 3: 
let any = ["hi", 10 , "world"]

any.push("world")
any.push(20)
//this time ther wont be any error because both types where declered

//Objects

let obj = {
    name: "hello",
    age: 21,
    skill: "dev"
}

//In object we cant directly add new key value, in order to do that we have to write hole object again without missing a single ky
//And we cant even change the type of a key value
// Ex: 
obj.name = "muhaz" //this is allowed
obj.name = 10 //this is not allowed
