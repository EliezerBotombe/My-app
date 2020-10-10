console.log('heelo world');

var Name = prompt('what is your name?');
var age = prompt('how old are you?');
var gender = prompt('Man? or Woman?');

if (age <= 12) {
    console.log(Name + ' is a ' + gender + ' kid who is ' + age + ' years old');
    alert(Name + ' is a ' + gender + ' kid who is ' + age + ' years old' );
}else if (age >= 13 && age <20){
    console.log(Name + ' is a ' + gender + ' teenager, who is ' + age + ' years old');
    alert(Name + ' is a ' + gender + ' teenager who is ' + age + ' years old');
}else if (age >=21 && age <=30) {
    console.log(Name + ' is a young ' + gender + ' who is ' + age + ' years of age');
    alert(Name + ' is a young ' + gender + ' who is ' + age + ' years of age');
}else if (age >=31 && age <= 49) {
    console.log( Name + ' is a full grown ' + gender + ' man! of ' +  age + ' years of age');
    alert(Name + ' is a full grown ' + gender + ' man! of ' +  age + ' years of age');
}else if (age >= 50){
    console.log(Name + ' is a very old  ' + gender);
    alert(Name + ' is a very old  ' + gender)

}
    

