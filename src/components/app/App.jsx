import React from 'react';
import { Audio } from '../audio';
import { Template } from '../template';
import './App.css';

function App() {
  const list = [{ title: 'Audio', details: <Audio /> }];
  return <Template list={list} />;
}

export default App;
