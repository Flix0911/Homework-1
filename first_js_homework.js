//1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//DRY = don't repeat yourself ~ avoid or reduce repetition. So far, we have used Visual Studio for this

//2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//Const creates a variable that cannot be reassigned another value. On the other hand, var and let create variables that CAN be resassigned another value

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
let g = 0;

//1. a is less than b
console.log(a < b)

//2. c is greater than d
console.log(c > d)

//3. name is equal to name
console.log('name' == 'name')

//4. a is less than b which is less than c
console.log(a < b < c)

//5. e ('kelvin') is not equal to 'kelvin' //not 100% about this, I would think it is true but it runs false when put as ==
console.log(e != 'kelvin')

//6. 48 is == to '48' //Same thing, I would think this would be != but that comes up as false. Not 100% sure as to why on this
console.log(48 == '48')

//7. f or false is not equal to e or kelvin
console.log(f != e)

//8. added above

//9.
console.log(g)

//10.
console.log("b + c" == g)