document.write('This is Javascript');
document.write('Hello agan');

var a = 10;
var b = 20;
var c = a + b;
var d = b/a;

document.write(a);
document.write(b);
document.write(c);
document.write(d);
/* document.write is not used frequently/regularly. Instead, use console.log */

var first_name = 'Sujit';
var middle_name = 'Achar';
var last_name = 'Bellary';
var full_name = first_name + ' ' + middle_name + ' ' + last_name;
console.log('Hello! This is console');
console.log('Hello! This is', full_name);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

a = a + 5;
b = a + b;

console.log(a);
console.log(b);

/* Functions (below) */

function sum(a,b,c){
    console.log(a+b+c);
}

sum(2,5,1);
sum(2,8,2);

function square(n){
    sum(1,2,3);
    console.log(n*n);
}

square(5);
square(12);
square(123456789);

function random(a,b,c){
    var x = a + b + c;
    var x = 90;
    console.log("Hello World!");
    return x;/* terminates the statement. Below statements are not executed. */
    var x = 90;
    console.log("Hello World!");
}

var y = random(1,2,9);
console.log(y);

/* conditional statements */

/* if(condition){
    do something
} Syntax */

var health = 39;

if(health > 90){
    console.log("RUN FASTER !!!");
}

else if(health > 80){
    console.log('RUN FAST !!');
}
else if(health > 60){
    console.log('BRISK WALK !');
}
else if(health > 50){
    console.log('JUST WALK');
}
else if(health == 40){
    console.log('YOUR HEALTH IS LOW, TAKE REST !!!');
}
else{
    console.log("YOUR HEALTH IS TOO LOW, STOP !!!")
}


/*Increment & Decrement Operators */

var i = 5;

i++;
i++;
//i--;
//i--;
console.log(i);
i++;
i++;
//i--;
//i--;
console.log(i);

//Loop statements

//for loop syntax below

/* for(IntitalCondition, FinalCondition, Iteration){
    doSomething
}*/

var i;

for(i=0;i<6;i++){
    console.log("Hai");
}

for(i=1;i<8;i++){
    console.log(i);
}

// (OR) below

/*var i=0;

for(i;i<6;i++){
    console.log("Hai");
}

for(i;i<8;i++){
    console.log(i);
}*/

//while loop syntax below

/* while(Condition){
    doSomething
}*/

//while condition executes - true or false values

var i=1;

while(i<=10){
    //console.log("Hai");
    console.log(i);
    i++;
}

// MAIN WORK

var x = document.getElementById("heading1");
console.log(x.innerHTML); //.innerHTML is used
x.innerHTML = 'Hi Sujit!!!'; //changes the content on web page, not console


var health2 = 40;

var message = document.getElementById('message');

if(health2 > 80){
    message.innerHTML = 'RUN FAST !!!'; //.style is used
    message.style = 'color: green'; // You can aplly font-size, font-family, text-align, etc, etc...
}
else if(health2 > 50){
    message.innerHTML = 'WALK';
    message.style = 'color: orange';
}
else{
    message.innerHTML = 'REST !!!';
    message.style = 'color: red';
}

var b = document.getElementById('btn');

function change(){
    health2++;
    message.innerHTML = health2;
    message.style = 'color: green';
}

b.addEventListener('click', change);
//b.addEventListener('mouseover', change);


//OOPS CONCEPT
class user{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName(){
        console.log('Hi! My name is ' + this.firstname + ' ' + this.lastname + ' & I am ' + this.age + ' years old.');
    }
    changeLastName(newlastname){
        this.lastname = newlastname;
    }
    reverseName(){
        var temp = this.firstname;
        this.firstname = this.lastname;
        this.lastname = temp;
    }
}

var player1 = new user('Sujit', 'Bellary', 21);
var player2 = new user('Anita', 'Bellary', 42);
var player3 = new user('Vasantha', 'Madhava', 55);

player1.getFullName();
player2.getFullName();
player3.getFullName();
player1.changeLastName('Achar Bellary');
player2.changeLastName('Desai');
player3.changeLastName('Bellary');
player1.getFullName();
player2.getFullName();
player3.getFullName();
player1.reverseName();
player2.reverseName();
player3.reverseName();
player1.getFullName();
player2.getFullName();
player3.getFullName();

//Strings (Used in passwords)

var s = 'Sujit Bellary';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.replace('Bellary','Kumar'));
console.log(s.replace('Sujit Bellary','SUJEET KUMAR'));

//ternary operator

var isAlive = false;

isAlive? console.log('Hai!') : console.group('RIP');