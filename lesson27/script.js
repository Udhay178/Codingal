var a = [232, 34, 3, 432, 5, 54, 4, 5656, 5, 767, 657, 23876]

console.log(a[1])
console.log(a[a.length - 4])

// sort function in ascending order
a.sort(function (x, y) {
return x-y
})
console.log(a)

// sort function in descending order
a.sort(function(x,y)
{
    return y-x
})
console.log(a)

// same thing but by using the arrows 
a.sort((x,y)=>x-y)
a.sort((x,y)=>y-x)

var d = a.map(a=>a/4)
console.log(d)

