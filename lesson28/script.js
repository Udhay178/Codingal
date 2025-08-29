try{
    const w = 99
    w = 100
}catch(err){
    console.log(err)
    console.log('error 404 has occured, the chandrayaan is going to blow up, but code will not stop')
}


var a = 'udhay'
var b = 54
var c = true
var d  = null

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

var x = 99

x = String(x)

console.log(x)
console.log(typeof(x))

var y = true
var z = false

y = Number(y)
z = Number(z)

console.log(y)
console.log(z)

console.log(typeof(y))
console.log(typeof(z))

function greet(name){
    console.log ("Long time no see" + name)
}

greet("Ankush Sir")

var greet2 = name => console.log("Long time no see" + name)

greet2("Aditya")

