import React from "react";
import "./styles/contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" class="contact container">
        <h1 class="subheading contactSub">Contact Me</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Message"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
