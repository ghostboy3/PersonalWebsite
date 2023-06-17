import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./styles/contact.css";

export const Contact = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const onInput1 = (e) => setValue1(e.target.value);
  const onInput2 = (e) => setValue2(e.target.value);
  const onInput3 = (e) => setValue3(e.target.value);

  const onClear = () => {
    setValue1("");
    setValue2("");
    setValue3("");
  };
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a516f7m', 'template_kg2y3ag', form.current, 'wUxqBGfThxcIdD8te')
      .then((result) => {
        onClear();
          console.log("WORKING");
          window.alert("MESSAGE SENT! I'll get back to you ASAP.")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} id="contact" class="contact container" onSubmit={sendEmail}>
          <h1 class="subheading contactSub">Contact Me</h1>

          <div class="form-group" >
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name = "user_email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value ={value1}
              onInput={onInput1}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              name = "user_name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
              value ={value2}
              onInput={onInput2}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea
              type="text"
              name = "message"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Message"
              value ={value3}
              onInput={onInput3}
            />
          </div>
        <input type="submit" value="Send" class="btn btn-primary"/>
        </form>
    
  );
};
export default Contact;
