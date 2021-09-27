const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 43, 64, 13);
const fruits = ['õun', 'banaan', 'pirn'];
const mixed = [13, 'Bob', true, undefined, null, {a:1, b:2}, new Date()]

let val;

val = numbers.length; //masiivi pikkus
val = Array.isArray(numbers); //kas on masiiv?
val = numbers[3]; // kindel väärtus

//numbers[3] = 100 //asendamine

// lisamine
//numbers.push(250);
//numbers.unshift(120);

//maha võtmine
numbers.pop();
numbers.shift();

//index
//val = numbers.indexOf(100);

//lõikamine
//numbers.splice(1, 2);

// ühendamine
val = numbers.concat(numbers2);

//sorteerimine
val = fruits.sort();

//kasvujärjekorras
val = numbers.sort(function(x, y){
	return x-y
});

//kahanevasjärjekorras
val = numbers.sort(function(x, y){
	return y-x
});

numbers.splice(3, false, 100)

console.log(numbers);
console.log(val);
