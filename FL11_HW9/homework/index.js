// Task 0
function getNumbers(string) {
    let numbers = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] % 1 === 0) {
            numbers.push(+string[i]);
        }
    }
    return numbers;
}
// Task 1
function findTypes(...theArgs) {
    let output = {};
    for (let i = 0; i < theArgs.length; i++) {
        switch (typeof theArgs[i]) {
            case 'object':
                output.object = output.object++ || 1;
            break;
            case 'function':
                output.function = output.function++ || 1;
            break;
            case 'boolean':
                output.boolean = output.boolean++ || 1;
            break;
            case 'undefined':
                output.undefined = output.undefined++ || 1;
            break;
            case 'number':
                output.number = output.number++ || 1;
            break;
            case 'string':
                output.string = output.string++ || 1;
            break;
            case 'symbol':
                output.symbol = output.symbol++ || 1;
            break;
            default:
            break;
        }
    }
return output;
}
// Task 2
function executeForEach(array, action) {
    for (const i of array) {
      action(i);
    }
  }
// Task 3
function map(array, action) {
    let x = [];
    executeForEach(array, function(array) {
        let newValue = action(array);
        x.push(newValue); 
    });
    return x; 
}
// Task 4
function filter(array, action) {
    let x = [];
    executeForEach(array, function(array) {
        if (action(array)) {
            x.push(array);
        }
    });
    return x;
}
// Task 5
function showFormattedDate(date) {
    const monthAll = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();
    return `Date: ${monthAll[month]} ${day} ${year}`
  }
//Task 6
function canConvertToDate(time){
    if (Date.parse(time)) {
        return true;
    } else {
        return false;
    }
}
//Task 7
function daysBetween(firstDate, secondDate) {
    const sec = 1000, 
          min = 60,
          hour = 60,
          day = 24;
    let dayMilSec = sec*min*hour*day,
        firstDate_milSec = firstDate.getTime(),
        secondDate_milSec = secondDate.getTime();
    return Math.abs(Math.floor((firstDate_milSec - secondDate_milSec) / dayMilSec));
}
//Task 8
let users = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
function getAmountOfAdultPeople(data) {
    const day = 365,
          year = 18;
    let adult = new Date();
    return filter(data, function(data) {
        let born = new Date(data.birthday);
        return daysBetween(born, adult)/day > year
    }).length; 
}  
// Task 9
function keys(input) {
    let keyArray = [];
    for (let key in input) {
        if ({}.hasOwnProperty.call(input, key)) {
            keyArray.push(key);
        }
    }
    return keyArray;
}
// Task 10
function values(input) {
    let valueArray = [];
    for (let key in input) {
        if ({}.hasOwnProperty.call(input, key)) {
            valueArray.push(input[key]);
        }
    }
    return valueArray;
}
