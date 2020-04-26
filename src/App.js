import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

function App() {

      //define state
      const [amount, saveAmount] = useState(0);


  return (
    <div className="App">
    <Header
      title="Loans simulator"
      description="Use the form to get a price"
    />

    <div className="container"> <Form
      amount ={amount}
      saveAmount={saveAmount}
    /> </div>
    </div>
  );
}

export default App;
