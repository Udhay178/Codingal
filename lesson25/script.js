// normal var is hoisted has its reference before its existence so it has existence before its birth
var a = 111
var b = 'El Silbon'
var c = true
var d = {name: 'El Silbon', age: '111', urbanlegend: true}
var e = [99, 111, 666, 999]
var f = NaN
var g = undefined
var h = null
var i = ''
var j = -111

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))
console.log(typeof(i))
console.log(typeof(j))

// let and const are not hoisted so it will show an reference error and u cannot access it before its existence


// u can put another value to let var even after putting an value
let k = 99
k = 100

// u cannot put anothr value to const var sadly... it will show typeerror
const l = 666

if(a < 30){
    // if a is below 20 he is young
    console.log("Conrats, A is Young")
}else{
    // if a is above 20 he is old grandpa
    console.log("Poor A has grown now....")
}