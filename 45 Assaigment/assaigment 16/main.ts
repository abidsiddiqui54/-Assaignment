let guestArray: string[] = ["norr","fatima","anaya","alishba"];

let canNotAttend: string = "anaya";

let newGuest: string = "saima";

guestArray[guestArray.indexOf(canNotAttend)] = newGuest;

//console.log(guestArray)

//guestArray.map((items) =>
    //console.log(`dear ${items},i found a bigger dinner table so i invited more people.`)

//);


let guestBeg: string = "fatima"
guestArray.unshift(guestBeg);
//console.log(guestArray)


let middleGuest: string = "horiya"
let middleEndex = guestArray.length/2
guestArray.splice(middleEndex,2,middleGuest)
//console.log(guestArray



guestArray.push("misbah")
//console.log(guestArray)

guestArray.map((items) =>
    console.log(`dear ${items},you are invited in the more people list on dinner`)

);

