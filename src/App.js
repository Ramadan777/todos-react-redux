import './style.css'
import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import Todos from './Todos'

function App() {

  return (
    <div className="app">
      <Header />
      <Input />
      <Todos />
    </div>
  );
}

export default App;
