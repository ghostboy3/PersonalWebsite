// import Sidebar from 'cdbreact/dist/components/Sidebar';
import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import {Codeblock} from "./Codeblock";

const Sort = () => {
  return (
    <>
        {/* <Sidenav /> */}
        <div className="tutorial">
            <h2>Bubble Sort Tutorial</h2>
            <hr />
            <p>Bubble sort is a sorting algorithm that works by swapping adjecent elements until they are in the correct order.</p>
            <img style={{width: '30%'}} src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Bubble_sort_with_flag.gif" alt="" />
            <Codeblock text={
`void bubbleSort(int arr[])
{
    int n = arr.length;
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // swap arr[j+1] and arr[j]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
`}/>
        <br />
        <h2>How the Code Works</h2>
        <p>1. The n variable is assigned the length of the array. </p>
        <p>2. The outer loop runs from i = 0 to n - 1. It represents the number of passes through the array.</p>
        <p>3. The inner loop runs from j = 0 to n - i - 1. It compares adjacent elements and swaps them if necessary.</p>
        <p>4. If an element at index j is greater than the element at index j + 1, they are swapped using a temporary variable.</p>
        <p>5. After the inner loop finishes, it means the array is already sorted, and the algorithm can exit early.</p>
        <br />
        <p>Time Complexity: O(N^2)</p>
        <a href="https://www.geeksforgeeks.org/bubble-sort/">Source: GeeksforGeeks</a>
        <br />
        <a href="https://commons.wikimedia.org/wiki/File:Bubble_sort_with_flag.gif">Image Source: Wikimedia</a>
        </div>
    </>
  );
};
export default Sort;
