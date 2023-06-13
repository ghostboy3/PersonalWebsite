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
        <p>Time Complexity: O(N^2)</p>
        <a href="https://www.geeksforgeeks.org/bubble-sort/">Source: GeeksforGeeks</a>
        <br />
        <a href="https://commons.wikimedia.org/wiki/File:Bubble_sort_with_flag.gif">Image Source: Wikimedia</a>
        </div>
    </>
  );
};
export default Sort;
