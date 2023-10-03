export class User {
  firstName : string;
  lastName : string;
  age : number;
  email : string;
  comment : string;
  constructor(userFirstName : string,
              userLastName : string,
              userAge : number,
              userEmail : string,
              userComment : string) {
    this.firstName = userFirstName;
    this.lastName = userLastName;
    this.age = userAge;
    this.email = userEmail;
    this.comment = userComment;
  }
}
