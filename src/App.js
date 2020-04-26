import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header
      title="Loans simulator"
      description="Use the form to get a price"
    />

    <div className="container"> <Form/> </div>
    </div>
  );
}

export default App;
