import React from "react";
// import { CopyBlock, atomOneDark } from "react-code-blocks";
// https://www.geeksforgeeks.org/default-array-values-in-java/
import "./tutorial.css";
import { Codeblock, Ansblock } from "./Codeblock";
import Sidenav from "./Sidenav";

const Arrays = () => {
  return (
    <>
      {/* <Sidenav /> */}
      <div className="tutorial">
        <h2>Arrays Tutorial</h2>
        <hr />
        <p>
          An array is a data structure that stores a collection of elements of
          the same data type.
        </p>
        <h3 class="sub">Declaring Arrays</h3>
        <p>
          To declare an array, specify the datatype of the elements it will hold
          then add square brackets
        </p>
        <Codeblock
          text={`String[] students;     // Declares an array called students that holds Strings`}
        />
        <br />
        <h3 class="sub">Initalizing Arrays</h3>
        <p>
          After declaring and array, it must me initialize. There are 2 ways to
          initialize an array.
        </p>
        <p>The first way is by stating the length of the array.</p>
        <p>
          For example, if we want to store the names of 5 students we can do
          this:
        </p>
        <Codeblock
          text={`String[] students = new String[5];     // All elements default to null for String arrays`}
        />
        <p>
          This will create a new array of Strings of length 5 and set the
          default values to null.
        </p>
        <h5 class="sub">
          This table shows all the default values when initializing arrays.
        </h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Datatype</th>
              <th scope="col">Default Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>null</td>
            </tr>
            <tr>
              <td>int</td>
              <td>0</td>
            </tr>
            <tr>
              <td>double</td>
              <td>0.0</td>
            </tr>
            <tr>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>User-created type</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>

        <p>
          If we already know the values in the array, we can assign the values
          upon declaration using curly brackets.
        </p>
        <Codeblock
          text={`String[] students = {"John", "Jane", "Mike", "Ben", "Sam"};`}
        />
        <br />
        <h3>Accessing Array Elements</h3>
        <p>You can access individual elements of an array using their index and square brackets.
          The index starts from 0 for the first element and goes up to (arrayLength - 1) for the last element.</p>
        <Codeblock
        text=
{`int[] numbers = {3, 7, 1, 9, 10};
System.out.println(numbers[0]);   // Output: 3
System.out.println(numbers[2]);   // Output: 1
System.out.printlnt(numbers[4]);  // Output: 10
`}/>
        <br />
        <h3 class="sub">Modifying Arrays</h3>
        <p>
          To modify the elements in the array, we can assign a new string an
          index of the array
        </p>
        <span class="highlight">
          Note: the indexes of the array start at 0 and goes until the length of
          the array - 1
        </span>
        <Codeblock
          text={`String[] students = {"John", "Jane", "Mike", "Ben", "Sam"};
students[0] = "Sarah;"
studetns[2] = "Emily";
studetns[4] = "Harry";
`}
        />
        <p>The students array is now equal to:</p>
        <Ansblock text={`[Sarah, Jane, Emily, Ben, Harry]`} />
        <br />
        <h3 class="sub">Array Length</h3>
        <p>You can get the length of an array using the <span class = "highlight">length</span> property.</p>
        <Codeblock
          text={`String[] students = {"John", "Jane", "Mike", "Ben", "Sam"};
System.out.printlnt(students.length);   // Output: 5
`}
        />
        <br/>
        <h3 class="sub">Looping Through Arrays</h3>
        <p>You can use a for loop to iterate through each element of an array.</p>
        <Codeblock 
        text= {`int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}
//Output: 1 2 3 4 5`}/>
        <p>You can also use a for each loop. The loop headers in for-each loops look like this: <span class="highlight">for(type variable: arrayName)</span></p>
        <Codeblock
        text={`String[] names = {"john", "jane", "mike", "ella"};
        for (String i : names) {
          System.out.println(i);
        }`}/>
      </div>
    </>
  );
};
export default Arrays;
