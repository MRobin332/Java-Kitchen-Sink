var myName = 'Mitch Robinson'
const usStates = 50
var val = assignedSum1(5, 4);
var index = 0;
if (myName.charCodeAt(index) > 76) {
    console.log('Back of the line!')
} else {
    console.log('Next!')
}
sayHello();
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var favVeg = ('Carrots', 'Broccoli', 'Spinach', 'Sweet Potatoes', 'Green Beans');

let arr = [('Charles', 20), ('Abby', 23), ('Frederick', 19), ('Lucy', 47), ('Denis', 37)]

getLength('Hello World');



function assignedSum1(num1, num2) {
    return (num1 + num2)
}

function sayHello() {
    return (console.log('Say Hello!'));
}


function checkAge(userName, userAge) {
    if (userAge < 21) {
        (console.log("Sorry ${userName} you aren't old enough to view this page!"));
    } else {
        (userAge > 21)
        console.log("Welcome!");
    }
}

for(var m = 0; m < favVeg.length; m++) {
    console.log(favVeg[m]);
}


for (let i of arr) {
    checkAge();
}


function getLength(anyWord) {
    console.log(anyWord.length);
}


if(getLength > 4) {
    console.log ('The world is nice and even!');
} else (getLength < 3); {
    console.log ('The world is an odd place!');
}






