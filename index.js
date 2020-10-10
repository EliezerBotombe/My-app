/*
Data types in javascript
String
Boolean
Number
undefined 
null
*/



/*
***************************************************
*variables and data types


console.log('This world !!!!');

var firstName = 'john';
console.log(firstName);

var lastName = 'klein';
var age = 25;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'architect';
console.log(job);
*/

/*
********************************************************************
Variables mutation and type coercion

var firstName = 'elie';
var age = 20;
console.log(firstName + ' ' + age);

// type coercion >>basically mixing different data types into one ...boolean,strings,number,null,underfined
var job, isMarried;
job = 'architect';
isMarried = false;
console.log(firstName + ' is a ' + age + ' years old ' + job + ' but is he married?: ' + isMarried );

//variable mutation >> is basically chnaging the variable content...
firstName = 'sheren';
age = 35;
job = 'dentist';
isMarried = true;

alert(firstName + ' is a ' + job + ", she is " + age + ' years olds' + ' but is she married? ' + isMarried);
var lastName = prompt('what is her last name?');
console.log(firstName + ' ' + lastName);

var lastName = 'henderson';
console.log(firstName + ' ' + lastName);

var lastName = prompt('what is her first part?') + prompt('what is her last part?');  
console.log(firstName + ' ' + lastName);
*/

/*********************************************
 * basic operators
 * are like functions that are written in a special way in javascript
*/

//var yearElie = year -21;
//console.log(yearElie);

/*this is another method of declaring variables: below

var name, surname,ranking,job,favNumber;      
name = 'ghost';
surname = 'reckon';
ranking = 'lethal';
job = 'pilot';
favNumber = 22;

//or we can declare variables individually like this

var name = 'black';
var surname = 'ops';
var ranking = 'Genoside';
var job = 'lutenant';
var favnumber = 2;

*/



/*
// Math operations
var now, yearElie, yearAlice ,ageElie, ageAlice, fake,nix;
ageElie = 20;
ageAlice = 19;
now = 2020;
yearElie = now - ageElie;
yearAlice = now - ageAlice;
fake = 'fake it';


console.log(now + 2);
console.log(now / 2);
console.log(now * 2);
console.log(now -2);

var elieOlder = ageElie > ageAlice;
console.log( elieOlder);
//alert(elieOlder);

var aliceOlder = ageElie < ageAlice;
console.log(aliceOlder);
//alert(aliceOlder);

// type of operator
console.log(typeof ageElie);
console.log(typeof elieOlder);
console.log(typeof fake);
console.log(typeof nix);

*/ 

/*********************
 * operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//multiple operators
var isFullAge = now - yearJohn >= fullAge;  //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
// alert(ageJohn);


// multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 5; //8 * 4 - 5//32 -5//26
console.log(x, y);

//More operators 
// x = x + 2; is the same as x += 2;
x *= 2; 
console.log(x);
//x = x +10; is the same as x += 10;
x += 10;
console.log(x);
x ++;
console.log(x);
x --;
console.log(x);

*/

/*test attempt failed but passed the next one 
var johnMass, johnHeight, markMass, markHeight;

johnMass = 92 ;
johnHeight = 1.6;

markMass = 78;
markHeight = 1.7;

var johnBmi = johnMass / (johnHeight*johnHeight);
var markBmi = markMass / (markHeight*markHeight);

var johnHigher = johnBmi > markBmi;
console.log('is Mark\'s BMI higher than John\'s ?' + johnHigher);

// test passed//

var massLuke , heightLuke, massKim,heightKim;

massLuke = 84; //kg
heightLuke = 1.8; //cm

massKim = 76; //kg
heightKim = 2.4 //cm

var bmiLuke = massLuke / (heightLuke * heightLuke);
var bmiKim = massKim / (heightKim * heightKim);

var lukeGreater = bmiLuke < bmiKim;
console.log('is luke\'s bmi greater than kim\'s ??' + lukeGreater);
*/

/******************************************************
 * If / else statements
 */
/*
 var firstname = 'rick';
 var civilStatus = 'single';

 if(civilStatus === 'married') {
     console.log(firstname + ' is married!');
 }
 else{
     console.log(firstname + ' is single');
 }
 ///////////////////////////////////////////////
var herName = 'alia';
var isMarried  = true;
if (isMarried) {
    console.log(herName + ' is married!!');
} else {
    console.log(herName + ' is still single!!')
}



//new coding challenge with if / else statements
var massLuke , heightLuke, massKim,heightKim;
massLuke = 84; //kg
heightLuke = 1.8; //cm
massKim = 76; //kg
heightKim = 1.8 //cm

var bmiLuke = massLuke / (heightLuke * heightLuke);
var bmiKim = massKim / (heightKim * heightKim);

if (bmiLuke > bmiKim){
    console.log('Luke\'s bigger than kim');
} else {
    console.log('Kim\'s bigger than luke');
}

*/

/**********
 * Boolean logic
 * AND(&&) operator true if all are true
 * OR(||) true if one is true
 * NOT(!) inverts true/false value{if one is true the other one must be false}
 */
/*
 var firstName = 'john';
 var age = 80;

 if (age < 13) {
     console.log(firstName + ' is a boy');
 } else if (age >= 13 && age <=19) {
     console.log(firstName + ' is a teenager');
 } else if (age > 20 && age <= 30) {
     console.log(firstName + ' is a young man');
 } else if (age > 31 && age < 65) {
     console.log(firstName + ' is a full grown man');
 } else if (age >= 65 && age <80) {
     console.log(firstName + ' is a very old man');
 } else {
     console.log(firstName + ' is going to die soon');
 }

 var herName = prompt('whats your name?');
 var herAge = prompt('how old are you?');

 if (herAge <= 18) {
     console.log(herName + ' cant go inside the strip club');
     alert('sorry ' + herName + ' ~NO MINORS ALLOWED!!!!~ inisde the club')
 } else if (herAge >= 18 && herAge < 21) {
     console.log(herName + ' can only stay till 9 pm');
     alert('Hi ' + herName + ' you can stay till 9 pm')
 } else if(herAge >= 21 && herAge <= 35) {
     console.log(herName + ' can stay all night');
     alert('Hi ' +  herName + ' you can stay all night')
 } else  if (herAge > 36 ) {
     alert('Sorry ' + herName + '  you are too old!!!!');
 }
*/
 
// Thernary Operator and switch statements
/*  
var firstName = 'jane';
var age = 11;

age >= 18 ? console.log(firstName + ' Drinks beer.')
: console.log(firstName + ' Drinks juice.');

var drink = age  >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);



// switch statements
var firstName = 'elie';
var job = 'footballer';
switch (job)  {
    case 'artist':
        console.log( firstName + ' teaches kid how to draw');
        break;
    case 'pilot':
        console.log( firstName + ' teaches kids how to fly planes');
        break;
    case 'driver':
        console.log(firstName + ' Drives people to different locations');
        break;
    case 'footballer':
        console.log( firstName + ' teaches kids howto play soccer');
        break;
    case 'Basketballer':
        console.log(firstName + ' teaches kids how to play football');
        break;
    default:
        console.log(firstName + ' does something else');
        break;
    
    
}


var OtherName = 'edin';
var favNumber = 22;
switch (favNumber) {
    case 7:
        console.log(OtherName + '\'s role model is Ronaldo');
        break;
    case 10 :
        console.log(OtherName + '\'s role model is Messi');
        break;
    case 9:
        console.log(OtherName + '\'s role model is Lewandoski');
        break;
    case 11:
        console.log(OtherName + '\'s role model is salah');
        break;
    case 0:
        console.log(OtherName + 'is not a soccer fan');
        break;
    case 22:
        console.log(OtherName + '\'s role model is Dimaria');
        break;
    default:
        console.log(OtherName + ' \'s  idol is Ronaldinho');
        break;

}

// There are 3 ways in which we can write condition code
***************************************************
//if and else statement
//switch statements
//Ternary statements
***************************************************


// This switch statement uses boolean to return result// true or false
var Name = 'steve';
age = 16;

switch (true) {
    case age < 13:
        console.log(Name + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(Name + ' is a teenager');
        break;
    case age >= 20 && age <30:
        console.log(Name + ' is a young man');
        break;
    default:
        console.log(Name + ' is a man');
        break;
}
*/


/************************************
 * Truthy and falsy values and equality operators
 */
// falsy values: underfined, null, 0,'',NaN
// truthy values: Not falsy values
 /*
var height;
height = '';
if (height || height === 0){
    console.log('variable is defined');
}else {
    console.log('variable has not been defined');
}

// Equality Operator == and ===

//the == convert the number from string to the deisred similar result
height = 23;
if (height == '23') {
    console.log('the == operator does type coerion');
}


//where as the === return only the exact number
 if (height === '23') {
     console.log('the === operator is strict it will not return true if the number is as a string only as a number, will only return true if the value is exactly 23 as a number ');
 }

*/


//coding challenge 2!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*

var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;

if (johnAverage > mikeAverage) {
    console.log('John wins average = ' + johnAverage);
} else if (johnAverage < mikeAverage) {
    console.log('mike wins average = ' + mikeAverage);
}else {
    console.log('Its a DRAW!! ' + johnAverage);
}



if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John wins with an Average of = ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('mike wins with an Average of  = ' + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary wins with an Average of = ' + maryAverage);
} else if(johnAverage === mikeAverage && johnAverage === maryAverage) {
    console.log('Its a 3 way tie ' + johnAverage);
} else if(johnAverage === mikeAverage && johnAverage > maryAverage){
    console.log('john and mike tied with '+ johnAverage + ' but mary lost');
} else if(johnAverage === maryAverage && johnaverage > mikeAverage){
    console.log('john and mary tied with ' + maryAverage + ' but mike lost');
} else if(mikeAverage === maryAverage && mikeAverage > johnAverage){
    console.log('mike and mary are tied with ' + mikeAverage + ' but john lost');
} else{
    console.log('No winner')
}

console.log(maryAverage);
console.log(mikeAverage);
console.log(johnAverage);

*/
/***************
 * functions


 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }  
 var ageJohn = calculateAge(1990);
 console.log(ageJohn);


// another example...we pass in the value in the brackets by adding numbers there

 function calculate(birthDay) {
     return 2020 - birthDay;
 }
 var age = calculate(1999);
 console.log(age);

 //////////////////////////

function calculateAge(birthYear) {
    return 2020 - birthYear;
}
var ageJohn = calculateAge(1945);
var ageLouis = calculateAge(1999);
var ageJane = calculateAge(2001);
console.log(ageJohn, ageLouis, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years. ');
    }else {
        console.log(firstName + ' is already retired');
    }
    
}
yearsUntilRetirement(1945 , 'john');
yearsUntilRetirement(1999 , 'Louis');
yearsUntilRetirement(2001 , 'Jane');

*/
/**************************************
 * Function Statements and Expressions
 
//Function declaration
function whatDoYouDo(job,firstName) {

}


//Function Expressions

var WhatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver' :
            return firstName + ' drives a cab in lisbon';
        case 'designer' :
            return firstName + ' designs beautiful websites';
        default :
        return firstName + ' does something else';
    }
}

console.log(WhatDoYouDo('teacher', 'Mike'));
console.log(WhatDoYouDo('designer', 'duncan'));
console.log(WhatDoYouDo('Dancer', 'Tania'));
//////////////////////////////////////////////////////////////////

var occupation = function(Skills, Name) {
    switch(Skills) {
        case 'dribbler':
            return Name + ' is the best dribbler';
        case 'longshots':
            return Name + ' has the best long shot skills';
        case 'finisher':
            return Name + ' is the best finisher';
        case 'passer':
            return Name + ' is the best passer';
        default:
            return Name + ' is multi skilled';
    }
}

console.log(occupation('dribbler', 'Messi'));
console.log(occupation('freekicker', 'Neymar'));
console.log(occupation('finisher', 'Lewandoski'));
////////////////////////////////////////////////////////////////

var popular = function(title, iconName) {
    switch(title) {
        case 'legend' :
            return iconName + ' is a legend';
        case 'immortal' :
            return iconName + ' is an immortal';
        case 'unbeatable' :
            return iconName + ' is unbeatable';
        case 'icon' :
            return iconName + ' is an obsolute icon';
        default:
            return iconName + ' is undenyiable';
    }
}

console.log(popular('legend','Mc Gregor'));
console.log(popular('immortal', 'Romnaldo'));
console.log(popular('', 'Goku'));

*/

/*********************************************
 * Arrays
 * are likes collections of variables
 * there are two ways of creating an array 
 * 
 * 1. by using brackets
 * var Numbers = [199, 172, 772];
 * var Name = ['elie', 'emma','kim'];
 * 
 * 2.by using new keyword and adding array
 * new Array(199, 172, 772);
 * new Array('elie', 'emma', 'kim');
 */
/*
//initialise new array
 var Name = ['elie', 'kira', 'jane'];
 var years = new Array(1999, 1998, 1990);

 console.log(Name[0]);
 console.log(Name.length);

// Mutated the array data
Name[1] = 'Ben';
Name[Name.length] = 'Mary';
console.log(Name);


// different data types in an array(numbers,boolean,string)

//Methods to add things inside an array
//push method
//-->adds an element at the end of an array
var john =['john', 'Smith', 1990, 'driver', false];
john.push('blue');
console.log(john);
//result
//['john', 'Smith', 1990, 'driver', false, 'blue']


//The unshift Method
//The unshift method will add an element at the beginning of an array
var carla = ['Carla', 'swanson', 1990, 'artist', true];
carla.unshift('Mrs.');
console.log(carla);
// result
//['Mrs', 'swanson',1990, 'artist',true]
 
//The pop method
//The pop method removes the element from  the end of an array.....the last thing in the array will be removed 
var jeff = ['age', 'red','legend', 'likes bale'];
jeff.pop()
console.log(jeff);
//result
//['age', 'red', 'legend']

//The shift method 
//the shift method removes an element of an array from starting side...so the first element on the list will be reomved
var shows = ['wwe', 'ufc', 'mma', 'judo', 'krt'];
shows.shift();
console.log(shows);
//result
//['ufc', 'mma', 'judo', 'krt']

//the indexOf Method
//it returns the position of an element in an array
//it the elements is not in the array ..it will return -1
var animals = ['lion', 'eagle', 'croc', 'tiger'];
console.log(animals.indexOf('lion'));
//result
//0
console.log(animals.indexOf(6767));
//result
// -1

var king = animals.indexOf('lion') === -1 ?
 'is not the king of the jungle' : 'the lion is the king of the jungle';
console.log(king);
*/

/***************
 * Coding challenmge



 function tipCalculator(bills) {
     var percentage;
     if (bills < 50 ) {
         percentage = .2;
     }else if (bills > 50 && bills < 200) {
         percentage = .15;
     }else {
         percentage = .1;
     }
     return percentage * bills;
 }
console.log(tipCalculator(50));

var bills = [124, 48, 268];
var tips =[tipCalculator(bills[0]),
           tipCalculator(bills[1]), 
           tipCalculator(bills[2])];

var finalPay = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];
console.log(finalPay);

///////////////////////////////////////////


function tipCalculate(bill) {
    var Perc;
    if (bill < 50) {
       Perc =  0.2;
    }else if (bill > 50 && bill < 200) {
       Perc =  0.15;
    }else {
       Perc =  0.1;
    }
    return Perc * bill;
}


var bill = [124, 48, 268];
var tip = [tipCalculate(bill[0]),
           tipCalculate(bill[1]),
           tipCalculate(bill[2])];
var Pay = [bill[0] + tip[0],
           bill[1] + tip[1],
           bill[2] + tip[2],];
console.log(Pay);

///////////////////////////////////////////////////

function calculate(billing) {
    var percent;
    if (billing < 50) {
        percent = 0.2;
    } else if (billing > 50 && billing < 200) {
        percent = 0.15;
    } else {
        percent = 0.1;
    }
    return percent * billing;
}
var billing = [124, 89, 34];

var tp = [calculate(billing[0]),
          calculate(billing[1]),
          calculate(billing[2]),];
var Payme = [billing[0] + tp[0],
             billing[1] + tp[1],
             billing[2] + tp[2],];
          

console.log(Payme);
*/





/*********
 * Objects and properties
 * we use oobjects to group together different variables 
 * difference between an array and an object is that in arryas the order matters a lot but in objects order doesnt matter
 * 

 var john = {
     name: 'john',
     lastName: 'smith',
     birthYear: 1978,
     family: ['bob', 'jane', 'arthur'],
     job: 'teacher',
     isMarried: false
 };

 var eddie = {
     name: 'eddie',
     lastName: 'murphy',
     birthYear: 1980,
     family: ['kim', 'joey', 'hayley'],
     job: 'car salesman',
     isMarried: true,
 };
 console.log(eddie);
 console.log(john);


var eddie = {
    name: 'eddie',
    surname: 'murphy',
    age: 22,
    isMarried: false,
    kids: ['alfred', 'fred', 'dan'],
    exes: ['kimberley', 'harriette', 'simone']
};
var a = 'age';
eddie.kids = ['none']
console.log(eddie);
console.log(eddie[a]);

var elie = {
    name: 'elie',
    lastName: 'botombe',
    age: 22,
    isMarried: false,
    family: ['teddy', 'barney', 'marshall'],
};
var n = 'name';
var u = 'age';
elie['isMarried'] = true;
console.log(elie['lastName']);
console.log(elie[n]);
console.log(elie.isMarried);
console.log(elie.family);



var ufc = new Object();
ufc.heavyweight = 'stipe';
ufc.bantamweight = 'vera';
ufc.ladies = 'ronda';

console.log(ufc);



/*****************************************************
 * objects and methods 
 * methods are functions attached to an objects
 

var john = {
    name: 'john',
    lastName: 'terry',
    birthYear: 1995,
    family: ['tania', 'kira', 'isabella'],
    isMarried: false,
    calcAge: function(birthYear) {
        return 2020 - birthYear;
    }
};

console.log(john.calcAge(1995));

var ted = {
    name: 'ted',
    lastName: 'swanson',
    year: 2000,
    age: 22,
    isMarried: false, 
    calculateAge: function(year) {
        return 2020 - this.year;
    }
}

console.log(ted.calculateAge());
/////////////////////////////////////////////

var lisa = {
    name: 'isabella',
    lastName: 'merced',
    birth: 1998,
    family: ['tion', 'han', 'will'],
    herAge: function(birth) {
        return 2020 - this.birth;
    }
}
alert(lisa['name'] + '  is ' + lisa.herAge() + ' years old');


// How to show how many things are inside an array or an object
var emma = {
    name: 'emma',
    lastName: 'klivelan',
    dateBorn: 1997,
    family: ['eddy', 'tom', 'mikey', 'elsa'],
    calcEmmaAge: function(dateBorn) {
        this.age = 2020 - this.dateBorn;
    }
}
// How to show what the element inside the object contains and how to access the elements inside and array which is inside an object
console.log(emma.name + ' was born in 1997, she is ' + emma.calcEmmaAge() + ' years old and she has 4 siblings which are ' + emma.family)
console.log(emma.family.length); // here we can see how many things are inside the array *family* which is inside the object *emma*

console.log(emma);
////////////////////////////////////////////////////////////////




// coding chalenge 4

var Mark = {
    name: 'Mark',
    height: 1.8, //inch
    mass: 94, //cm
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
} 
Mark.calcBMI();
console.log(Mark.name + '\'s BMI is ' + Mark.bmi);

var john = {
    name: 'john',
    height: 1.74, 
    mass: 92,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.calcBMI();
console.log(john.name + '\'s BMI is ' + john.bmi);

if (john.bmi > Mark.bmi) {
    console.log('john\'s BMI is greater ');
} else if(john.bmi < Mark.bmi) {
    console.log('Mark\'s BMI is greater ');
} else {
    console.log('Their BMI are the same');
}


// second atttempt coding challenge 4

var elie = {
    fullname: 'elie botombe',
    age: 20,
    mass: 78,
    height: 1.6,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
elie.calcBMI();
console.log(elie);

var ella = {
    fullname: 'ella smith',
    age: 19,
    mass: 78,
    height: 1.51,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
ella.calcBMI();
console.log(ella);

if (elie.bmi > ella.bmi) {
    console.log(elie.fullname + '\'s bmi is ' + elie.bmi + ' which is greater than ' + ella.fullname + '\'s bmi of ' + ella.bmi);
} else if (ella.bmi > elie.bmi) {
    console.log(ella.fullname + '\'s bmi is ' + ella.bmi + ' which is greater than ' + elie.fullname + '\'s bmi of  ' + elie.bmi);
}else {
    console.log(elie.fullname + ' ' + ella.fullname + '\'s Bmi\'s are identical');
}
*/
//done

/********************************************************
 * Loops and iteration
 * different types of loops
 * --# for loop 
 * --# while loop 
 * 


//for loop 
for (var i = 0; i < 10; i++) {
    console.log(i);

}
// i = 0, 0 < 10 true, log i to console, i++,
// i = 1, 1 < 10 true, log i to console, i++,
// i = 2, 2 < 10 true, log i to console, i++,
// i = 3, 3 < 10 true, log i to console, i++,
// i = 4, 4 < 10 true, log i to console, i++,
// i = 5, 5 < 10 true, log i to console, i++,
// i = 6, 6 < 10 true, log i to console, i++,
// i = 7, 7 < 10 true, log i to console, i++,
// i = 8, 8 < 10 true, log i to console, i++,
// i = 9, 9 < 10 true, log i to console, i++,
// i = 10 , 10 < 10 false.....this will not run, exit the loop; thsi will no longer log anything to the console

var john = ['john', 'smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop
//does the same thing as a for loop but in a different method
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
//The continue -> is used to quit current argument and continue to the next one

var club = ['madrid', 'arsenal', 'napoli', 'bayern', 'chelsea', false, 2020, 166, 'lyon'];
for (var i = 0; i < club.length; i++) {
    if (typeof club[i] !== 'string') continue;
    console.log(club[i]);
}

var player = ['ronaldo', true, 'hazard', 2020, 'gnabry', 'depay', 'mbappe', false, 33];
for (var i = 0; i < player.length; i++) {
    if (typeof player[i] !== 'string') continue;
    console.log(player[i]);
}

var ex = ['nicole', 'mira', 'merveille', 123, 'kim', 45];
for (var i = 0; i < ex.length; i++) {
    if (typeof ex[i] !== 'string') continue;
    console.log(ex[i]);
}


//while loop
var ex = ['her1', 'her2', 33,'herlast'];
var i = 0;
while (i < ex.length) {
    console.log(ex[i]);
    i++;
}
 

var Tom = ['villain', 'ninja',false, 'ladies man',33 , 'hates cat'];
for (var i = 0; i < Tom.length; i++) {
    if (typeof Tom[i] !== 'string') continue;
    console.log(Tom[i]);
}

//break
var eddie = ['good friend', 'great sports man',false, 'trustworthy',22, 'charming'];
for (var i = 0; i < eddie.length; i++) {
    if (typeof eddie[i] !== 'string') break;
    console.log(eddie[i]);
}

//looping backwards 
for (var i = eddie.length - 1; i >= 0; i-- ) {
    console.log(eddie[i]);
} 
*/
/************************************
 * coding challenge 3
 

 var John = {
     name: 'john adams',
     bill : [124,48,268,180,42],
     calcTip : function() {
         this.tip = [];
         this.finalValues = [];

         for (var i = 0; i < this.bill.length; i++) 
         {
             // Determine % based on tipping rules
             var percentage;
             var bill = this.bill[i];
             if (this.bill[i] < 50) {
                  percentage = .2;
             }else if (this.bill[i] >= 50 && this.bill[i] < 200) {
                 percentage = .15;
             }else {
                 percentage = .1;
             }
             //add the result to the corresponding array
             this.bill[i] = bill * percentage;
             this.finalValues[i] = bill + bill * percentage;
         } 
     }

 }
 
 John.calcTip();
 console.log(John);





var elie = {
    name: 'eliezer botombe',
    bills: [123, 33, 88, 230, 48, 178, 300],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (this.bills[i] < 50) {
                percentage = .2;
            }else if (this.bills[i] >= 50 && this.bills[i] < 200)  {
                percentage = .15;
            }else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    } 
}
elie.calcTips();
console.log(elie);
///////////////////////////////////////////////////

var alice = {
    name: 'alice shweinsteiger',
    bills: [253, 67, 45, 188, 29, 340, 88, 155],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            }else if (bill >= 50 && bill < 200) {
                percentage = .15;
            }else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
alice.calcTips();
console.log(alice);

/////////////////////////////////////////////

var max = {
    name: 'max steel',
    payments: [323, 67, 433, 676, 98, 28, 100, 47, 55, 38, 502],
    calcTips: function() {
        this.tip = [];
        this.finalPay = [];

        for (var i = 0; i < this.payments.length; i++) {
            var percentage;
            var payment = this.payments[i];
            if (payment < 100) {
                percentage = .3;
            }else if (payment >= 100 && payment < 300) {
                percentage = .2;
            }else {
                percentage = .1;
            }
            this.tip[i] = payment * percentage;
            this.finalPay[i] = payment + payment * percentage; 
        }
    }
}

max.calcTips();
console.log(max); 

*/

/******************************************************************************************
 * 
 * Hoisting
 
 
//function declarations
calculateAge(2000);
function calculateAge(year) {
    console.log(2016 - year);
}


//function expressions


var retirement = function(year) {
    var age = 2016 - year;
    var name = prompt('whats your name?');
    console.log(name + ' you have ' + (65 - (2016 - year)) + ' years left to retire as you\'re only ' + age);
} 

retirement(1990); 


//variables
//we can not log a variable without defining it first or else it will return underfined as long as we log the variable before defining it

console.log(age); X
var age = 23;
console.log(age);


var age = 23;
function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);


// scopes  
var a = 'what !!';
first();

function first() {
    var b = ' the ';
    second();

    function second() {
        var c = ' heck ';
        console.log(a + b + c);
    }
}
*/
/**********
 * 
 *THIS. keyword/variable
 
//console.log(this);
//By logging this. keyword in a function which is being called ina global environment...its still ghoing to return the window.....
//this. used by defualt returns the window object which is the whole logged console of file
calcAge(1980);
function calcAge(year) {
    console.log(2016 - year);
    console.log(this);
}


//This. used in a method


var jeff = {
    name: 'jeff',
    lastName: 'henderson',
    year: 1999,
    calcAge: function(year) {
        this.age = 2020 - year;
        return this.age;
    }
}
jeff.calcAge(jeff.year);
console.log(jeff.age);
 

var ted =  {
    name: 'teddy',
    lastName: 'bunkers',
    birth: 1889,
    calcBirth: function(birth) {
        console.log(this);
        console.log(2020 - this.birth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

ted.calcBirth();


// Guess your age, the game i made
console.log('Let me guess your age!!!!');
var person = {
    name: prompt('what\'s your name ?'),
    lastName: prompt('what\'s your surname ?'),
    year: prompt(' what year is it ?'),
    birth: prompt('what year were you born in?'),
    calcAge: function() {
        birth = this.birth;
        if (this.birth > 0 && this.birth <= 3000) {
            this.age = this.year - birth;
            console.log('hi!!! ' + name + ' ' +  this.lastName + ' you are '+ this.age + ' years old');
            alert('hi!!! ' + name + ' ' +  this.lastName + ' you are '+ this.age + ' years old')

        }else if(this.birth < 0){
            console.log('please enter a valid year!!')
        }
    }
}

person.calcAge();

*/



/***********************************************
 Functions and objects
 Everything is an object 

 PRIMITIVES                    EVERYTHING ELSE
 *numbers                       *Arrays
 *Strings                       *Functions
 *Booleans                      *Objects
 *Underfined                    *Dates
 *Null                          *Wrappers for numbers,strings , booleans
*******************************************************
Inhertance is when an object is based on a another object or when one object gets access to another objects property and methods



//Merging arrays using Concat()
//*************concat*************************
console.log(erik.lastName);
var me = ['hey', 12];
var her = ['hi', 7];
var mix = me.concat(her);
console.log(mix);
*/

//Function constructor
//The variable of a function constructor must conatin a capital letter at the start
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}
Person.prototype.lastName = 'smith';
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

var john  = new Person('john', 1998, 'teacher');
var jane = new Person('jane', 1996, 'designer');
var mark = new Person('mark', 1978, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


//Prototype
/*
var Person = function(name , birthYear,isMarried, job, car) {
    this.name = name;
    this.birthYear = birthYear;
    this.isMarried = isMarried;
    this.job = job;
    this.car = car;
}
Person.prototype.calcAge = function() {
    console.log(2020 - this.birthYear);
}
Person.prototype.lastName = 'Adams';

var erik = new Person('erik', 1999, false, 'engineer', 'Maserati');
var emma = new Person('emma', 1993, true,'lawyer','Drives a Bmw');
var fred = new Person('fred', 1990, true,'footballer','Drives a Merc');


erik.calcAge();
emma.calcAge();
fred.calcAge();
*/


//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }

};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1999;
john.job = 'ploceman';


var jane = Object.create(personProto,{
    name: {value: 'jane'},
    yearOfBirth: {value: 1977},
    job:{ value: 'designer'},
})

*/



// Primitives vs objects
/*
//primitives
 var a = 23;
 var b = a;
 a = 46;
 console.log(a);
 console.log(b);

// Objects
var obj1 = {
    name: 'john',
    age: 26,
};
var obj2 = obj1;
obj1.age = 45;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 27;
var obj = {
    name: 'paul',
    city: 'Paris',
};

function change(a, b) {
    a = 32;
    b.city = 'qatar';
}

change(age, obj);

console.log(obj.name);

var aging = 12;
var person = {
    name: 'edie',
    city: 'jhb',
};
var personality = {
    color: 'blue',
    favTeam: 'chelsea',
    car : 'mercedes',
};

function change(a, b, c) {
    a.aging = 15;
    b.city = 'las vegas';
    b.name = 'tom';

}
function changeIt(a) {
    a.color = 'green';
    a.favTeam = 'Madrid';
    a.car = 'lamborghini';
};

change(aging, person);
changeIt(personality);
console.log(aging);
console.log(person.city);
console.log(personality.color);
console.log(personality.car);

*/
/////////////////////////////////////////////////////////////////////////


/***********
 * Functions returning functions
 * 


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what ux design is ?');
        }
    }else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach ? ' + name)
        };
    }else {
        return function(name) {
            console.log('hello ' + name + ' what do you do?')
        };
    }
}



var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('');
teacherQuestion('john');
designerQuestion('eddie');
otherQuestion('mella');

interviewQuestion('')('mella');


function interview(job) {
    if (job === 'engineer') {
        return function engineer(name) {
            console.log(name + ' is an engineer')
        };
    }else if (job === 'artist') {
        return function artist(name) {
            console.log(name + ' is an artist')
        };
    }else if (job === 'driver') {
        return function driver(name) {
            console.log(name + ' is a driver')
        };
    }else {
        return function(name) {
            console.log(name + ' what do you do ?')
        };
    }
}

var engineerInterview = interview('engineer');
var artistInterview = interview('artist');
var driverInterview = interview('driver');
var otherInterview = interview('');

engineerInterview('ted');
artistInterview('mark');
driverInterview('lina');
otherInterview('Mella');

interview('artist')('miriam');
*/


/********************************
 * Lecture : IIFE
 * immediatetly invoked function expressions
 * 
 */
/*
function game() {
        var score = Math.random() + 10;
        console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() + 10;
    console.log(score >= 16);
}) ();

(function (goodluck) {
    var score = Math.random() + 10;
    console.log(score >= 5 - goodluck);
}) (5);

*/
////////////////////////////////////////////////////////////////////
/*******
 * Closures
 * 

function retirement(retirementAge) {
    var a = ' year\'s left until retiremnet';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(65);
var retirementGER = retirement(70);
var retirementPOR = retirement(60);
retirementUS(2000);
retirementGER(1998);
retirementPOR(2002);
*/
/*

//1st way 
function interview(job) {
    return function (name) {
        console.log(name + ' is a ' + job);
    }
}
 var teacher = interview('teacher');
 var driver = interview('driver');

 teacher('elie');
 driver('khalifa');

//2nd way

function interview(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' is a designer');

        }else if (job === 'teacher') {
            console.log(name + ' is a teacher');

        }else {
            console.log('what do you do for a living ? ' + name);
        }
    }
}

interview('teacher')('ted');

/////////////////////////////////////////////////////////////////////

*/
/**********************************************************************
 * Bind ,call and apply
 * 
 * 
 

var han = {
    name: 'han',
    age: 25,
    job: 'Racer',
    presentation: function(style,timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '+ this.name + ', I\'m a ' + this.job + ' and i am ' + this.age + ' yearsold.');
        }else if ( style === 'friendly') {
            console.log('Hey!! What\'s up I\'m ' + this .name + ', i\'m a ' + this.job + ' I am ' + this.age + ' years old.Have a nice ' + timeOfDay);
        }
    }
}

//call method
 var emily = {
     name: 'emily',
     age: 22,
     job: 'pilot',
     
 }
 var keith = {
     name: 'keith',
     age: 45,
     job: 'salesman',
 }

han.presentation('formal', 'morning');
han.presentation.call(emily, 'friendly', 'afternnon');
han.presentation.call(keith, 'friendly', 'day');
*/
/****************************************************** 

//other method   Apply
//han.presentation.aplly(emily, ['friendly', 'afternoon'] );

var hanFriendly = han.presentation.bind(han, 'friendly');
hanFriendly('morning');
hanFriendly('night');


var emilyFormal = han.presentation.bind(emily, 'formal');
emilyFormal('afternnon');
emilyFormal('evening');
emilyFormal('Morning');
*/
/////////////////////////////////////////////////////////////
//Binding
/*
var  years = [1990, 1965, 1917, 2005];
function arrayCalc( arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 30));
console.log(ages);
console.log(fullJapan);

*/

 /************************************************
  * Coding challenge
  * 
 

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

Question.prototype.displayQuestion()  = 
{
    console.log(this.question);

    for (var i = 0; i < this.answers.lenght; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}


var q1 = new Question('is javascript the coolest programming language in the world?',[ 'yes', 'No'],0);
var q2 = new Question('what is the my name?', ['Eliezer', 'bouba', 'jonas'],2);
var q3 = new Question('fav car ?', ['bmw', 'maserati', 'merc'],2);


var Questions = [q1, q2, q3];

var n = Math.floor(Math.random() + Questions.lenght);
questions[n].displayQuestion();

*/

















/******************************************************************************************
 * Budget app
 */

























































 






