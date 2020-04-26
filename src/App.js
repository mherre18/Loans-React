import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';

import './App.css';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {

      //define state
      const [amount, saveAmount] = useState(0);
      const [term, saveTerm] = useState('');
      const [total, saveTotal] = useState(0);
      const [loading, saveLoading] = useState(false);

      let componet;

      if(loading) {
        componet = <Spinner/>
      }
      else if(total === 0){
        componet = <Message/>

      } else {
        componet = <Result
                      total={total}
                      term={term}
                      amount={amount}
        />

      }


  return (
    <div className="App">
    <Header
      title="Loans simulator"
      description="Use the form to get a price"
    />

    <div className="container"> <Form
      amount ={amount}
      saveAmount={saveAmount}
      term={term}
      saveTerm={saveTerm}
      total={total}
      saveTotal={saveTotal}
      saveLoading={saveLoading}
    /> </div>
        <div className="messages">
        {componet}
        </div>
    </div>
  );
}

export default App;
