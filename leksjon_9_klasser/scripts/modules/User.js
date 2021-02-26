export default class User {

    constructor(username){
        //default constructor
        this.username = username;
    }

    toString(){
        return `username = ${this.username}`;
    }
}
