// import Sidebar from 'cdbreact/dist/components/Sidebar';
import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import {Codeblock, Ansblock} from "./Codeblock";

const Arraylist = () => {
  return (
    <>
        {/* <Sidenav /> */}
        <div className="tutorial">
          <h2>ArrayList Tutorial</h2>
          <hr />
          <p>ArrayLists are resizable arrays. To use the ArrayList class, it must be imported from java.util package.</p>
          <p>ArrayLists only work with Objects and have a variety of unique functions that arrays don't have.</p>
          <br />
          <h3 class = "sub">Creating ArrayLists</h3>
          <span>Here is how you create an ArrayList:</span>
          <Codeblock text={
            `import java.util.ArrayList;
ArrayList<String> strArrayList = new ArrayList<String>();
ArrayList<Integer> intArrayList = new ArrayList<Integer>();
ArrayList<CustomObject> objArrayList = new ArrayList<CustomObject>();`}/>
          <br />
          <h4>The add() method can be used to add objects to an ArrayList</h4>
          <Codeblock text={
            `strArray.add("string1");
strArray.add("string2");
strArray.add("string3");
System.out.println(strArray);`}/>
          <p>Output:</p>
          <Ansblock text={`[string1, string2, string3]`}/>
          <p>add(E obj, int index) adds the object to an index in the array</p>
          <Codeblock text={`strArray.add("insertedStr", 1); // adds "insertedStr to index 1 of strArray
System.out.println(strArray);`}/>
            <p>Output:</p>
            <Ansblock text = {`[string1, insertedStr, string2, string3]`}/>
            <br />
            <h4>Here is a table with common ArrayList methods</h4>
            <table class="table">
          <thead>
            <tr>
              <th scope="col">Method</th>
              <th scope="col">Purpouse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>add(element)</td>
              <td>Adds an element to the end of the ArrayList</td>
            </tr>
            <tr>
              <td>add(element, index)</td>
              <td>Inserts an element at the specified index.</td>
            </tr>
            <tr>
              <td>get(index)</td>
              <td>Returns the element at the specified index.</td>
            </tr>
            <tr>
              <td>set(index, element)</td>
              <td>Replaces the element at the specified index.</td>
            </tr>
            <tr>
              <td>remove(index)	</td>
              <td>Removes the element at the specified index.</td>
            </tr>
            <tr>
              <td>remove(element)	</td>
              <td>Removes the first occurrence of the specified element.</td>
            </tr>
            <tr>
              <td>size()</td>
              <td>Returns the number of elements in the list.</td>
            </tr>
            <tr>
              <td>isEmpty()</td>
              <td>Returns true if the list is empty, false otherwise.</td>
            </tr>
            <tr>
              <td>contains(element)</td>
              <td>Returns true if the list contains the specified element.</td>
            </tr>
            <tr>
              <td>indexOf(element)</td>
              <td>Returns the index of the first occurrence of the element.</td>
            </tr>
          </tbody>
        </table>
        </div>
    </>
  );
};
export default Arraylist;
