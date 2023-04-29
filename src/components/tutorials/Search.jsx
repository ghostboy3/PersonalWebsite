import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import { Codeblock } from './Codeblock';

const Search = () => {
  return (
    <>
        <Sidenav />
        <div className="tutorial">
          <h2>Searching Tutorial</h2>
          <hr />
          <h4>Linear Search</h4>
          <p>Linear search loops through an array in order until it finds the desired element</p>
          <Codeblock text={
`public int linearSearch(int arr[], int n){
    for (int i = 0; i < arr.length; i ++){    // Loops from start to end of array
        if (arr[i] == n){   // if the n is found, return the index
          return i;
        }
    }
    return -1;    // if n is not in the array, return -1
}`}/>
        <p>Time Complexity: O(n)</p>
        </div>
    </>
  );
};
export default Search;
