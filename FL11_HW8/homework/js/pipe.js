
function addOne(x) {
    return x+1;
}
function pipe() {
    let a = arguments[0];
    for (let i=1;i<arguments.length;i++) {
        a = arguments[i](a); 
    }
    return a;
}
pipe(1,addOne,addOne);

