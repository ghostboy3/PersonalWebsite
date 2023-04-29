// import Sidebar from 'cdbreact/dist/components/Sidebar';
import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import { Codeblock } from './Codeblock';

const Recursion = () => {
  return (
    <>
        <Sidenav />
        <div className="tutorial">
          <h2>Recursion Tutorial</h2>
          <hr />
          <p>A recursive method  is one where a method recursivley calls itself.</p>
          <p>Recursion is based off the idea of breaking a problem into smaller sub-problems that are easier to solve.</p>
          <br />
          <h4>Example of a Recursive Fuction</h4>
          <p>We can use recursion to find the sum of all numbers from 1 to 5</p>
          <p>This problem can be broken down into smaller sub problems</p>
          <ul style={{transform: 'translate(40px, 0)'}}>
            <li>sum(5)</li>
            <li>5 + sum(4)</li>
            <li>5 + 4 + sum(3)</li>
            <li>5 + 4 + 3 + sum(2)</li>
            <li>5 + 4 + 3 + 2 + 1</li>
          </ul>
          <Codeblock text = {
`public int sum (int n)
{
    if (n == 1)
    {
        return 1;
    }
    else
    {
        return n + sum (n-1);
    }
}`}/>
        </div>
    </>
  );
};
export default Recursion;
