import React, {useState} from 'react';

const Form = ({amount, saveAmount, term, saveTerm}) => {

    const [error, saveError] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();

        if( amount === 0 || term === '' ) {
            console.log('Theres a mistake')
            saveError(true);
        }
    }

    return ( 
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
     );
}
 
export default Form;