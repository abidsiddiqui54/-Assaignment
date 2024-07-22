var guestArray = ["norr", "fatima", "anaya", "alishba"];
var canNotAttend = "anaya";
var newGuest = "saima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
//console.log(guestArray)
//guestArray.map((items) =>
//console.log(`dear ${items},i found a bigger dinner table so i invited more people.`)
//);
var guestBeg = "fatima";
guestArray.unshift(guestBeg);
//console.log(guestArray)
var middleGuest = "horiya";
var middleEndex = guestArray.length / 2;
guestArray.splice(middleEndex, 2, middleGuest);
//console.log(guestArray
guestArray.push("misbah");
//console.log(guestArray)
guestArray.map(function (items) {
    return console.log("dear ".concat(items, ",you are invited in the more people list on dinner"));
});
