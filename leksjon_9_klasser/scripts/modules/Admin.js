import User from "./User.js";

class Admin extends User{
    constructor(name){
        super(name);
    }

    toString(){
        return `Welcome admin ${this.username}`;
    }
}

export default Admin;