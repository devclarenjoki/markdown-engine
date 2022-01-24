import React, {useState, useEffect} from "react";
import './index.css';

import { marked } from "marked";

const TEST_MARKDOWN =
  "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n";

function App() {
  const [parsedMarkdown, setParsedMarkdown] = useState('');

  const handleChange = (event) => {
    const markdown = event.target.value;

    if (!markdown) {
      return;
    }
    const html = marked.parse(markdown, { sanitize: true });
    setParsedMarkdown(html);
  };

  useEffect(() => {
    setParsedMarkdown((parsedMarkdown));
    // return () => {
    //   setParsedMarkdown(TEST_MARKDOWN);
    // };
  }, [parsedMarkdown]);

  return (
    <div className="flex m-10">
      <textarea
        id="editor"
        cols={30}
        rows={10}
        className="w-1/2 m-5"
        onChange={handleChange}
      >
        {TEST_MARKDOWN}
      </textarea>
      <div
        className="w-1/2 m-5 p-5 bg-slate-900 text-white text-lg"
        id="preview"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      ></div>
    </div>
  );
}
export default App;