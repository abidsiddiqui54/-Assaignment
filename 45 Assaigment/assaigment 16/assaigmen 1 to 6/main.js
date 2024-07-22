var personName = "Eric";
console.log('hello ${parsonName},would you like to learn some python today');
//in lowercas
console.log("lowecase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("tittlecase:", personName.replace(/\ b\w/g, function (c) { return c.toUpperCase(); }));
//famous quote
var quote = " A person who never made a mistake never tried anything new.";
var authore = "Albert Einstein";
console.log("4{authore}once said, \"".concat(quote, "\""));
// famous quote 2
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//striping name
var parsonName = "\t\njohn boe \n\t";
console.log("origional: ", personName);
console.log("stripped:", personName.trim());
