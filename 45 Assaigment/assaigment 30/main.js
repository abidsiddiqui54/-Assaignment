var users = ["eric", "haseeb", "ali", "fatima", "saima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "saima") {
        console.log("hello admin, would you loke to see a status report");
    }
    else {
        console.log("hello ${user}, thank you for logging in again");
    }
}
