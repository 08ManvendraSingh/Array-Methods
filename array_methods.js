// array methods
// 1.sort()
// sorting string
var a = ["man", "fan", "van", "chain"];
a.sort();
console.log(a);
// sorting number(not gives right ans)
var a = [2, 4, 23, 45];
a.sort();
console.log(a);

// 2.reverse()
var a = ["man", "fan", "van", "chain"];
a.reverse();
console.log(a);
var a = [2, 34, 3, 20];
a.reverse();
console.log(a);

// 3.push()
var a = ["man", "fan", "van", "chain"];
a.push("can", "ran");
console.log(a);

// 4.pop()
var a = ["man", "fan", "van", "chain"];
a.pop();
console.log(a);
var a = ["man", "fan", "van", "chain"];
console.log(a.pop());

// 5.shift()
var a = ["man", "fan", "van", "chain"];
a.shift();
console.log(a);
var a = ["man", "fan", "van", "chain"];
console.log(a.shift());

// 6.unshift()
var a = ["man", "fan", "van", "chain"];
a.unshift("can", "ran");
console.log(a);

// 7.concat()
var a = ["man", "fan", "van", "chain"];
var b = ["can", "ran"];
var c = a.concat(b);
console.log(c);
var a = ["man", "fan", "van", "chain"];
var b = a.concat("can", "ran");
console.log(b);

// 8.join()
var a = ["man", "fan", "van", "chain"];
var b = a.join("-");
console.log(b);

// 9.isArray()
var a = ["man", "fan", "van", "chain"];
console.log(Array.isArray(a));
var a = 2;
console.log(Array.isArray(a));

// 10.indexOf()
var a = ["man", "fan", "van", "man", "chain"];
console.log(a.indexOf("man"));
console.log(a.indexOf("man", 1));

// 11.lastIndexOf();
var a = ["man", "fan", "van", "man", "chain"];
console.log(a.lastIndexOf("man"));
console.log(a.lastIndexOf("man", 1));

// 12.includes();
var a = ["man", "fan", "van", "chain"];
console.log(a.includes("van"));
console.log(a.includes("man", 1));

// 13.some();
var a = ["man", "fan", "van", "chain"];
console.log(a.some(chek));
function chek(hi) {
  return hi == "fan";
}

// 14.every();
var a = [2, 3, 4, 5, 67];
console.log(a.every(chk));
function chk(hi) {
  return hi > 1;
}

// 15.find();
var a = [2, 3, 4, 5, 67];
console.log(a.find(fnd));
function fnd(hi) {
  return hi > 3;
}

// 16.findIndex();
var a = [2, 3, 4, 5, 67];
console.log(a.findIndex(chk));
function chk(hi) {
  return hi > 3;
}

// 17.filter();
var a = [2, 3, 4, 5, 67];
console.log(a.filter(ok));
function ok(hi) {
  return hi > 3;
}

// 18.toString();
var a = ["man", "fan", "van", "chain"];
console.log(a.toString());

// 19.slice();
var a = ["man", "fan", "van", "chain"];
console.log(a.slice(1));
console.log(a.slice(1, 3));

// 20.splice();
var a = ["man", "fan", "van", "chain"];
a.splice(2, 0, "can", "ran");
console.log(a);
a.splice(1, 2);
console.log(a);
a.splice(2, 1, "can", "ran");
console.log(a);

// 21.forEach();
var a = ["man", "fan", "van", "chain"];
a.forEach(loop);
function loop(a) {
  console.log(a);
}

// how to make array
// 1.
var a = [2, 3, 5, 65, 6];
document.write(a + "<br>");
console.log(a);
// 2.
var a = [];
a[0] = 2;
a[1] = 3;
document.write(a + "<br>");
console.log(a);
// 3.
var a = new Array(1, 2, 3, 4);
document.write(a + "<br>");
console.log(a);

// array length()
var a = [2, 3, 4, 4, 5];
document.write(a.length + "<br>");
console.log(a.length);

// how to get array first element
var a = [3, 4, 4, 566];
document.write(a[0] + "<br>");
console.log(a[0]);

// how to get array last element
var a = [2, 3, 4, 5, 6];
document.write(a[a.length - 1] + "<br>");
console.log(a[a.length - 1]);
