let a =+prompt('Input lenght of side A');
let b =+prompt('Input lenght of side B');
let c =+prompt('Input lenght of side C');
if (a+b <= c || a+c <= b || c+b <= a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && a === c && c === b) {
    console.log('Eequivalent triangle');
} else if (a === b && a !==c || a === c && a !== b || b === c && b !== a) {
    console.log('Isosceles triangle');
} else { 
    console.log('Normal traingle');
}