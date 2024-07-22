var name_1 = "shabina";
var name_2 = "shabina naz";
var name_3 = "miss shabina naz";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
}
else {
    console.log("names are equal");
}
var age_1 = 17;
var age_2 = 22;
if (age_1 == 17) {
    console.log("eligible for vote");
}
if (age_1 !== 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 17 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 17 || age_2 != 22) {
    console.log("person is eligible not for vote");
}
var country = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (!country.includes("america")) {
    console.log("america is not include in an arraay");
}
