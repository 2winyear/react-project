import { useState } from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [boardContent, setBoardContent] = useState({
    title: '',
    content: ''
  })
  
  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setBoardContent ({
      ...boardContent,
      [name]: value
    })
  }

  return (
    <div className="App">
      <h1>Notice Board</h1>
      <div className="container">
        {viewContent.map(element =>
        <div>
        <h2>title</h2>
        <div>
          dkkk
        </div>
        </div>
        )}
      </div>
      <div className="form-wrapper">
        <input className="title-input" onChange={getValue} type="text" placeholder="title"></input>
        <CKEditor
          editor={ClassicEditor} 
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setBoardContent({
              ...boardContent,
              content: data
            })
            console.log(boardContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          />
      </div>
      <button className="submit-button"
      onClick={() => {
        setViewContent(viewContent.concat({...boardContent}));
      }}>input</button>
    </div>
  );
}

export default App;