"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Admin", "Eric", "Ali", "Hamza", "Fatima"];
let new_users = ["Admin", "Fatima", "Aliza", "Haseeb", "Noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log('sorry$(new_user), that name is taken');
    }
    else {
        console.log('yes $ (new_user), is still in available list');
    }
}
