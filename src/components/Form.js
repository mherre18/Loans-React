import React from 'react';

const Form = ({amount, saveAmount}) => {

    const readAmount = (e) => {
        saveAmount(parseInt(e.target.value))
    }

    return ( 
        <form>
        {amount}
          <div className="row">
              <div>
                  <label>Loan Amount</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Example: 3000" 
                      onChange = { readAmount }
                  />
              </div>
              <div>
                  <label>Term to Pay</label>
                  <select 
                      className="u-full-width"
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