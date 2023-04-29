import React from "react";
// import { CopyBlock, atomOneDark } from "react-code-blocks";
import './tutorial.css';
import {Codeblock} from "./Codeblock";
import Sidenav from "./Sidenav";

const Oop = () => {
  return (
    <>
    <Sidenav />
    <div className = "tutorial">
      <h2>Object Oriented Programming Tutorial</h2>
      <hr />
      <p>Object Oriented Programming relies on the concept of organizing code into clases and objects.</p>
      <p>Classes: Reusable code bluprints that are used to create individual objects</p>

      <Codeblock
      text={
`public class Dog {
    String breed;
    String name;
    int age;
    public Dog (String b, String n, int a)
    {
        breed = b;
        name = n;
        age = a;
    }
    public void bark(){
        System.out.println(name + " says woof!");
    }
}
`}
      />
      <p>The Dog class shown above has 3 attributes: breed, name and age.</p>
      <p>The Dog class show above has 1 method: bark()</p>
      <br />
      <p>To create a dog object, we call the constructor: Dog (String b, String n, int a)</p>
      <Codeblock
      text={`Dog dog1 = new Dog("Golden Retriever", "Biscuit", 4);  // Creates a Golden Retriever named Buiscuit that's 4 years old`}
      />
    </div>
    </>
  );
};
export default Oop;
