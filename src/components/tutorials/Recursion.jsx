// import Sidebar from 'cdbreact/dist/components/Sidebar';
import React from 'react';
import Sidenav from './Sidenav';
import './tutorial.css';
import { Codeblock } from './Codeblock';
import recursion from '../assets/tutorial/recursion.jpg'

const Recursion = () => {
  return (
    <>
        {/* <Sidenav /> */}
        <div className="tutorial">
          <h2>Recursion Tutorial</h2>
          <hr />
          <img src={recursion} style={{'width': '50%'}} alt="" />
          <a href="https://javascript.plainenglish.io/recursion-in-javascript-factorial-afb8e83cd897">Source</a>
          <p>A recursive method  is one where a method recursivley calls itself.</p>
          <p>Recursion involves breaking down a complex problem into smaller, simpler subproblems until a base case is reached. Each recursive call works on a smaller instance of the problem, and the results are combined to solve the original problem.</p>
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
      <p>In the above example, the base case is when n is equal to 1. Once it reaches this case, the recursion should stop.</p>
      <br />
      <h2>Common Mistakes</h2> 
      <ul>
        <li><span className="strong">Forgetting the Base Case:</span> The base case is the terminating condition that stops the recursion. Forgetting to include a base case or defining an incorrect base case can lead to infinite recursion and a stack overflow error.</li>

        <li><span className="strong">Missing or Incorrect Recursive Call:</span> It's crucial to make a recursive call with a simpler input. Forgetting to include the recursive call or using the wrong parameters in the recursive call can result in incorrect results or infinite recursion.</li>

        <li><span className="strong">Incorrect Parameter Updates:</span> When making a recursive call, it's important to ensure that the parameters passed to the recursive call are updated correctly. Failing to update the parameters can cause the recursive calls to operate on the same input repeatedly, leading to incorrect results.</li>
      </ul>
      </div>
    </>
  );
};
export default Recursion;
