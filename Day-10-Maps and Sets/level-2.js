
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//Question 1
const c =  [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let aUnionb = new Set(c)

console.log(aUnionb) 


//Question 2

let d = a.filter((num) => B.has(num))
let aIntersectb = new Set(d)

console.log(aIntersectb)

//Question 3
let e = a.filter((num) => !B.has(num)).concat(b.filter((num) => !A.has(num)))
 let aWithB = new Set(e)
 console.log(aWithB)
 
