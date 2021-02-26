import User from './modules/User.js';
import Admin from './modules/Admin.js';

let geir = new User("Geir");
let adminGeir = new Admin("Geir the admin");

console.log(adminGeir.toString());
console.log(geir.toString());
console.log(adminGeir);