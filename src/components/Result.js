import React from 'react';

const Result = ({amount, total, term}) => (
    <div className="u-full-width result">
    <h2>Resume</h2>
    <p>The exppected Amount is: ${amount}</p>
    <p>Your monthly payment is: ${(total / term).toFixed(2)}</p>
    <p>Total Amount: ${(total).toFixed(2)}</p>
    <p>To pay in: {term} months</p>
 </div>
);
 
export default Result;

