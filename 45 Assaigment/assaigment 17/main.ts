let guest: string[] = ["ali","bilal","carry","dawood","hamza"];

//console.log("due to limited space,only two peoplecan be invited for people");



while(guest.length > 2) {
    const removedguest = guest.pop();
   // console.log(`sorry, ${removedguest}, you're no longer invited to dinner.`);
}



guest.forEach((guest) =>{
// //console.log(`dear ${guest}, you're still invited to dinner`
})




guest.pop();
guest.pop();

console.log("final guest list:" , guest);