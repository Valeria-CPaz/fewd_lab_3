const greet = () => console.log('Haydo!');

var salutation = greet();

function echo(sound) {
    return sound
}

function greet2(name) {
    return console.log('Hello ' + name + '!');
}
greet2('Val');

function shout(string) {
    return console.log(string + string);
}
shout('Fire');

function doSomething(name) {
    return name;
}
console.log(doSomething('Valeria'));

function multiplyFive(number) {
    return 5 * number;
}
console.log(multiplyFive(5));

function myFunction() {
    alert('Hello World!');
    /* Erika, I tried like this, with window and global object, putting inside a console.log
     and I always have a mistake (alert is not defined). What I found on google just says alert() method is to be 
     used in browsers and it doesn't work here. I'm not sure but I don't know how to fix =(
    */
}
// myFunction();

var isAnswerRight = true;
isAnswerRight ? console.log('The answer is right!') : console.log('The answer is wrong!');

function tellFortune(numberOfChildren, PartnerName, GeoLocation, JobTitle){
    return console.log('You will be a ' + JobTitle + ' in ' + GeoLocation + 
    ',and married to ' + PartnerName + ' with ' + numberOfChildren + ' kids.');
} 
tellFortune(2, 'Dina', 'Seattle', 'Game Developer');
tellFortune(3, 'Abby', 'Vancouver', 'Designer');
tellFortune(5, 'Ellie', 'Berlin', 'Art Director');