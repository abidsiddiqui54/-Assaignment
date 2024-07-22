let personName: string = "Eric";
console.log('hello ${parsonName},would you like to learn some python today');


//in lowercas

console.log("lowecase:", personName.toLowerCase());

//in uppercase

console.log("uppercase:", personName.toUpperCase());

//title case

console.log("tittlecase:", personName.replace(/\ b\w/g,c=> c.toUpperCase()));

 //famous quote

 let quote:string = " A person who never made a mistake never tried anything new.";
 let authore: string = "Eric";
 console.log (`4{authore}once said, "${quote}"`);

 // famous quote 2
 
 let famous_person: string = "Eric";
  let message: string = `${famous_person} once said, "${quote}"`; 
  console.log(message);


  //striping name
  let parsonName: string = "\t\n Eric \n\t";
  console.log("origional: ",personName);
  console.log("stripped:",personName.trim());