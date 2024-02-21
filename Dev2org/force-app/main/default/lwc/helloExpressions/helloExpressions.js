// helloExpressions.js

import { LightningElement } from "lwc";

export default class TrackExample extends LightningElement {
  firstName = "";
  lastName = "";

  handleChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    } else if (field === "lastName") {
      this.lastName = event.target.value;
    }
  }

  get uppercasedFullName() {
    return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
  }
  /*
  @track 
  bool = true;
  number = 42;
  obj = { name: "John" };

  checkMutation() {
    this.bool = false; // Mutation detected

    this.number = 42; // No mutation detected: previous value is equal to the newly assigned value
    this.number = 43; // Mutation detected

    this.obj.name = "Bob"; // No mutation detect: `obj` field value is not reassigned
    this.obj = { name: "John" }; // Mutation detected - redefining the object with the same value creates a new object
    this.obj = { ...this.obj, title: "CEO" }; // Mutation detected
  }
  */
}
