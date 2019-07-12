
function reverseNumber(a){
    var i = 0;
    while (a !== 0) {
        i *= 10;
        i += a % 10;
        a -= a % 10;
        a /= 10;
    }
    return i;
 }
 reverseNumber();

