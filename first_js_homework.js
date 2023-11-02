//Section 1

//1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//DRY = don't repeat yourself ~ avoid or reduce repetition. So far, we have used Visual Studio for this

//2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//Const creates a variable that cannot be reassigned another value. On the other hand, var and let create variables that CAN be resassigned another value

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
var g = 0;

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
console.log(g) //9 and 10 cannot be correct. I'm just changing the value from above to below and didn't use const which is firm - not confident in this

//10.
var g = 100
console.log(b + c == g)




//Section 3

//1.
//while (true) {
//	console.log('Do not run this loop');
//}
//Yes this is an infinate loop. This will continue to run because it will always be true. It is not running against anything that will hit an end point, it will go forever

//2.
//const runProgram = true;
//while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;
//}
//No, this is not an infinate loop. It would be an infinate loop if runProgram = false; wasn't there. That itself is turning it false and killing the loop

//3.
let letters = "A"; //variable defined as A
let i = 0; //interger is set to 0

while (i < 20) { //This will run as long as i is less than 20
	letters += "A"; //add "1" to A. My assumption (not 100% on this) is that it will go a/b/c/d/etc until 19, and stop there
	i++; //See above comment
}

console.log(letters); //this is what will execute the above and can be viewed in the terminal

//Post running the above block. I thought it would do a/b/c/etc but it just ran AAAAAA. I was almost right but made an assumption that it would run through the alphabet. No assumptions next time!

//Section 4

//1.A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//A: A 'for' loop is used when you know the number of times you need to continue the sequence of elements (1/2/3/etc stopping at 10). On the other hand, the while loop is better when you are unsure where it should stop.
//A.pt2: When researching more, useful when you are unsure what data may be inputed by the individual inputting 
//Feels like a weak answer

//for (let i = 0; i < 100; i++) {
//	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//}
//1. First part is let i = 0 - initially code supplied to the loop
//2. What is the condition of when it runs? In this case, i, which starts at 0 will run until 99, because it will end when i is no longer < 100. 100 == 100, so 99 < 100 
//3. This is the repeating expression and what it will do. In this case i will add "++". To harp back to #2, this will go until i is no longer < 100

for (let i = 0; i < 1000; i++) {
    console.log(i);
}

//For loop in reverse

for (let i = 999; i > 0; i--) {
    console.log(i)
}

//More counting

for (let i = 1; i < 11; i++) {
    console.log("The value of i is: " + i + " of 10")
}

//Iteration

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i])
}

for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i] + i)
}
//Section 5 - see terminal_homework.bash