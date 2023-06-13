import React from "react";
// import { CopyBlock, atomOneDark } from "react-code-blocks";
import './tutorial.css';
import {Codeblock} from "./Codeblock";
import Sidenav from "./Sidenav";

const Oop = () => {
  return (
    <>
    {/* <Sidenav /> */}
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
      <br/>
      <h3 className="sub">Constructors</h3>
      <p>A constructor is a special method used to initialize objects. It has the same name as the class and is invoked using the <span className="highlight">new</span> keyword. Here's an example:</p>
      <Codeblock text={`public class Car {
    String brand;
    String color;
    int year;

    // Constructor
    public Car(String carBrand, String carColor, int carYear) {
        brand = carBrand;
        color = carColor;
        year = carYear;
    }

    // ...
}

// Creating an object using the constructor
Car myCar = new Car("Toyota", "Red", 2022);`}/>
    <p>Constructors can be overloaded, meaning a class can have more than 1 constructor</p>
    <Codeblock text={`public class Car {
    String brand;
    String color;
    int year;

    // Constructor
    public Car(String carBrand, String carColor, int carYear) {
        brand = carBrand;
        color = carColor;
        year = carYear;
    }
    // Constructor2
    public Car(String carColor, int carYear) {
        brand = "Toyota";
        color = carColor;
        year = carYear;
    }

    // ...
}

// Creating an object using the first constructor
Car myCar = new Car("Honda", "Red", 2022);
// Creating an object using the second constructor
Car myCar = new Car("Red", 2022);`}/>

    <br />
    <h3 className="sub">Inheritance</h3>
    <p>Inheritance allows you to create new classes (called subclasses) based on existing classes (called superclasses). </p>
    <p>Inheritance establishes a parent-child relationship between classes, where the child class inherits the characteristics (attributes and methods) of the parent class.</p>
    <Codeblock text={`public class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}`}/>
    <Codeblock text = {`public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }

    public void wagTail() {
        System.out.println("The dog wags its tail.");
    }
}`}/>
    <p>The Dog class extends the Animal class. It inherits the name attribute and the makeSound() method from the Animal class and adds its own breed attribute and wagTail() method.</p>
    <h3 class="sub">Polymorphism </h3>
    <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass.</p>
    <p>Polymorphism is achieved through method overriding and method overloading.</p>
    <span class="highlight">Method Overridding: When a subclass provides its own implementation of a method that is already defined in its superclass.</span>
    <Codeblock text={`public class Dog extends Animal {
    // ...

    @Override
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}`}/>
    <p>Now the makeSound mehtod for the dog class is displays "The dog barks."</p>
    <br />
    <span class="highlight">Method Overloading: Overloading allows you to define multiple methods with the same name but different parameters within the same class.</span>
    <Codeblock text={`public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(int a, int b, int c) {
        return a + b + c;
    }
}

// Usage
Calculator calculator = new Calculator();
int result1 = calculator.add(5, 10);           // Output: 15
double result2 = calculator.add(5, 10, 10);     // Output: 25`}/>
    </div>
    </>
  );
};
export default Oop;
