//tüübiteisendused

let val;

// nubmer -> string
val = String(555);
val = String(4+4);
val = String(5.6);

//boolean -> string
val = String(true);

//object -> string
val = String(new Date())

// array -> string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();

// string -> number
val = Number('5');
val = Number('5.6');
val = Number(true);
val = Number(null);
val = Number('tere');
val = Number([1, 2, 3])


console.log(val);