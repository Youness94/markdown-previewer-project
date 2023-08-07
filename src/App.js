import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { marked } from 'marked';
import './App.css';

function App() {

  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
 
  [title](https://www.example.com)
  \`code\`
 
  **bold text**
  > blockquote
  ![alt text](image.jpg)
  \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
  \`\`\`
  - First item
  - Second item
  - Third item

  `);
  marked.setOptions({
   breaks : true
  })
   return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={(event)=>{setMarkdown(event.target.value)}} ></textarea>
      <div id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
       }}></div>
    </div>
  );
}

export default App;
