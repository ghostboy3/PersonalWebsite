import React, {useState} from "react";
import { CodeBlock, a11yDark } from "react-code-blocks";


const Codeblock = (props) => {
    const [buttonText, setButtonText] = useState('Copy');
    const handleClick= ()=> {
        navigator.clipboard.writeText(props.text);
        setButtonText('Copied!')
    }
    return (
    <div style={{width: '100%', marginBottom: '20px'}}>
        <button onClick={handleClick} className = "copy-btn btn btn-outline-primary">{buttonText}</button>
      <CodeBlock
        text={props.text}
        language="java"
        showLineNumbers={true}
        theme={a11yDark}
      />
    </div>
  );
};

const Ansblock = (props) => {
  return (
  <div style={{width: '100%', marginBottom: '20px'}}>
    <CodeBlock
      text={props.text}
      language="text"
      showLineNumbers={false}
      theme={a11yDark}
    />
  </div>
);
};
export {Codeblock, Ansblock};
