var guestArreay = ["anaya", "noor", "fatima", "shabina naz"];
var canNotattend = "shabina naz";
console.log(canNotattend + " " + "can not the attend dinner");
var newguest = "alsihba";
guestArreay[guestArreay.indexOf(canNotattend)] = newguest;
console.log(guestArreay);
guestArreay.map(function (items) {
    return console.log("dear ".concat(items, ", you are invited dinner"));
});
