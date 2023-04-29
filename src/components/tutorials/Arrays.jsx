import React from "react";
// import { CopyBlock, atomOneDark } from "react-code-blocks";
import './tutorial.css';
import {Codeblock, Ansblock} from "./Codeblock";
import Sidenav from "./Sidenav";

const Arrays = () => {
  return (
    <>
    <Sidenav />
    <div className = "tutorial">
      <h2>Arrays Tutorial</h2>
      <hr />
      <p>An array is a data structure that stores a collection of elements of the same data type.</p>
      <p>The length of an array is established when declaring the array and cannot be changed.</p>
      <p>For example, if we want to store the names of 5 students we can create an array of type String and set it's length to 5.</p>
      <Codeblock
      text = {
`String[] students = new String[5];     // All elements default to null for String arrays`}/>
      <p>This will create a new array of Strings of length 5.</p>
      <p>If we already know the values in the array, we can assign the values upon declaration.</p>
      <Codeblock
      text = {
`String[] students = {"John", "Jane", "Mike", "Ben", "Sam"};`}/>
      <p>To modify the elements in the array, we can assign a new string an index of the array</p>
      <Codeblock
      text = {
`students[0] = "Sarah;"
studetns[2] = "Emily";
studetns[4] = "Harry";
`}/>
      <p>The students array is now equal to:</p>
      <Ansblock
      text = {`[Sarah, Jane, Emily, Ben, Harry]`}/>
      <p>Note: the indexes of the array start at 0 and goes until the length of the array - 1</p>
    </div>
    </>
  );
};
export default Arrays;
