import React from "react";

import { marked } from "marked";

const TEST_MARKDOWN =
  "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n";

function App() {
  const [markdown, setMarkdown] = React.useState(TEST_MARKDOWN);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("An essay was submitted: " + markdown);
  };  

  const getMarkdownText = () => {
    return {
      __html: marked(TEST_MARKDOWN),
    };
  };
  
  const Toolbar = props => {
    return <div className="shadow-lg shadow-blue-500/50 ">{props.text}</div>;
  };
  
  const Editor = props => {
    return (
      <textarea
      className="w-100 h-100 p-2 bg-blue-900 border-2 border-gray-200"
        id="editor"
        value={props.markdown}
        onChange={props.handleChange}
        type="text"
      />
    );
  };
  
  const Previewer = () => {
    return (
      <div
      className="m-20 p-20"
        id="previewer"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    );
  };
  
  return (
    // <div className="App">
    //   <h1>Markdown Previewer</h1>
    //   <textarea id="editor" value={TEST_MARKDOWN} />
    //   <div id="preview" dangerouslySetInnerHTML={{__html: marked(TEST_MARKDOWN)}} />
    // </div>

    <div className="">
      <section className="">
        <div className="flex flex-row justify-around">
          <div className="self-start">
          <Toolbar text="Editor" />
            <Editor
              markdown={markdown}
              onChange={handleChange}
            />
          </div>
          <div className="column">

          <Toolbar text="Previewer" />
            <Previewer markdown={markdown} />
          </div>
            {/* <div
              id="preview"
              className="previewer hero is-fullheight"
              dangerouslySetInnerHTML={getMarkdownText()}
            /> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}





export default App;
