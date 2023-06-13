import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import { Codeblock } from './Codeblock';
import { Code } from 'react-code-blocks';

const Search = () => {
  return (
    <>
        {/* <Sidenav /> */}
        <div className="tutorial">
          <h2>Searching Tutorial</h2>
          <hr />
          <h3 class="sub">Linear Search</h3>
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
        <span class="highlight">Time Complexity: O(n)</span>
        <br />
        <h3 class="sub">Binary Search</h3>
        <p>Binary search is the fastest searching algorthm.</p>
        <span class="highlight">Time complexity: O(log n)</span>
        <p>Binary search works by finding the midpoint of a sorted array then checking if the desired number is larger or smaller.</p>
        <p>Depending on which half of the array the number is in (larger or smaller side) it will elimanate the other side and repeat the process again.</p>
        <p>Once the midpoint is equal to the desired value or it's impossible to split the remaining array in half again, the search is over.</p>
        <Codeblock text={`public static int binarySearch(int[] arr, int target, int start, int end) {
    if (start <= end) {
        int mid = (start + end) / 2;    // find midpoint
        if (arr[mid] == target) {       // if midpoint is target search is over, return location of the midpoint
            return mid;
        } else if (arr[mid] < target) {     // If midpoint is less than target
            return binarySearch(arr, target, mid + 1, end);     // change the start to midpoint + 1 (ignore the lower half)
        } else {    // if midpoint is greater than target
            return binarySearch(arr, target, start, mid - 1);   // change the end to midpoint - 1 (ignore the upper half)
        }
    }
    return -1;    // if the start is greater than the end, the element isn't in the array
}`}/>
        <Codeblock text = {`public static void main(String[] args) {
    int[] arr = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int target = 14;
    int result = binarySearch(arr, target, 0, arr.length - 1);
    if (result == -1) {
        System.out.println("Element not found");
    } else {
        System.out.println("Element found at index " + result);
    }
}`}/>
        <span class="highlight">Remember: Array must be sorted for binary search to work</span>
        </div>
    </>
  );
};
export default Search;
