function show_magicions(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["shabina", "naz", "noor"];
show_magicions(magician);
//task 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magician[i] = magicians[i] + 'the great';
    }
}
var magician2 = ["shabina", "naz", "noor"];
make_great(magician2);
show_magicions(magician2);
//task 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        magician[i] = magicians[i] + 'the great';
    }
    return greatMagicians;
}
var magician3 = ["shabina", "naz", "noor"];
var greatMagicians2 = make_great2(magician3);
show_magicions(magician3);
show_magicions(greatMagicians2);
