// import Sidebar from 'cdbreact/dist/components/Sidebar';
import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import {Codeblock, Ansblock} from "./Codeblock";

const Arraylist = () => {
  return (
    <>
        <Sidenav />
        <div className="tutorial">
          <h2>ArrayList Tutorial</h2>
          <hr />
          <p>ArrayLists are resizable arrays. To use the ArrayList class, it must be imported from java.util package.</p>
          <p>ArrayLists only work with Objects and have a variety of unique functions that arrays don't have.</p>
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
        </div>
    </>
  );
};
export default Arraylist;
