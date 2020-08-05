console.log('heelo world');

var Name = prompt('what is your name?');
var age = prompt('how old are you?');

if (age <= 12) {
    console.log(Name + ' is a kid who is ' + age + ' years old');
    alert(Name + ' ,he\'s a kid who iss ' + age + ' years old' );
}else if (age >= 13 && age <20){
    console.log(Name + 'is a teenager, who is ' + age + ' years old');
    alert(Name + ' he\'s a teenager who is ' + age + ' years old');
}else if (age >=21 && age <=30) {
    console.log(Name + ' is a young man who is' + age + ' years of age');
    alert(Name + ' is a young man of ' + age + ' years of age');
}else {
    console.log('sorry ' + Name + ' you are too ancient to for us to guess your age!!!');
    alert('sorry ' + Name + ' you are too ancient to for us to guess your age!!!');
}