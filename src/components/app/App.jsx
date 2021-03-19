import React from 'react';
import { AudioComponent } from '../audio';
import { Template } from '../template';
import './App.css';

function App() {
  const list = [{ title: 'Audio', details: <AudioComponent /> }];
  return <Template list={list} />;
}

export default App;
