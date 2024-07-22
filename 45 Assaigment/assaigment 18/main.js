var placestovisit = ["tokyo", "pakistan", "america", "china", "japan"];
//console.log("origional order:", placestovisit);
//console.log("alphabetical order:",[...placestovisit].sort());
//console.log("origional order after sorting:", placestovisit);
//console.log("reverse alphabetical order:", [...placestovisit].sort().reverse());
placestovisit.reverse();
//console.log("reverse order:", placestovisit);
placestovisit.reverse();
//console.log("back to origional order", placestovisit);
placestovisit.sort();
// console.log("sorted in alphabetical order:", placestovisit)
placestovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placestovisit);
