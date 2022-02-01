import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from './component/Editor';

// @ts-ignore
import data from './test/compress.json';

function App() {
  return (
    <div className="App">
      <Editor data={data as any}/>
    </div>
  );
}

export default App;
