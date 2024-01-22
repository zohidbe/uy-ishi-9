///////////// 1-misol

let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[1]); // Natijada "Banana" chiqadi


/////////////////2-misol///

let colors = ['Red', 'Green', 'Blue'];
colors.push('Yellow'); // So'ngi o'ringa 'Yellow' qo'shildi
colors.pop(); // So'ngi o'ring o'chirildi
console.log(colors); // Natijada ['Red', 'Green', 'Blue']

//////////3-misol//////////

let numbers = [5, 2, 8, 1, 9];
numbers.sort((a, b) => a - b);
console.log(numbers); // Natijada [1, 2, 5, 8, 9]



////////////// 4-misol/////////


let names = ['John', 'Doe', 'Smith'];
let fullName = names.join(' ');
console.log(fullName); // Natijada "John Doe Smith"


////////////5-misol//\\


let text = 'Bu bir matn';
let subtext = text.substring(3, 6);
console.log(subtext); // Natijada "bir"


////6 -msiol///

// let numbers = [15, 8, 22, 17, 4];
// let filteredNumbers = numbers.filter(number => number > 10);
// console.log(filteredNumbers); // Natijada [15, 22, 17]



///7- misol///

// let lowercaseText = 'bu kichik harflar';
// let uppercaseText = lowercaseText.toUpperCase();
// console.log(uppercaseText); // Natijada "BU KICHIK HARFLAR"
