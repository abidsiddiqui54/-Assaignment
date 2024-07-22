let users : string [] = ["eric","haseeb","ali","bilal","abid"]
for (let user of users) {
if (user === "abid") {
    console.log("hello admin, would you loke to see a status report")
}else {
    console.log("hello ${user}, thank you for logging in again")
}
}