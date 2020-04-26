import React, {Fragment, useState} from 'react';
import {calculateTotal} from '../helpers';

const Form = ({amount, saveAmount, term, saveTerm}) => {

    const [error, saveError] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();

        if( amount === 0 || term === '' ) {
            console.log('Theres a mistake')
            saveError(true);
            return; //stop the code 
        }

        saveError(false);

        const total = calculateTotal(amount, term);

        console.log(total);

    }

    return ( 
        <Fragment>
        <form onSubmit={calculateLoan}>
              <div className="row">
              <div>
                  <label>Loan Amount</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Example: 3000" 
                      onChange = {e => saveAmount(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Term to Pay</label>
                  <select 
                      className="u-full-width"
                      onChange={e => saveTerm(parseInt(e.target.value))}
                  >
                      <option value="">Select</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calculate" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>

    {(error) ? <p className="error">Please complete the form</p> : null}
  
  </Fragment> 
     );
}

export default Form;