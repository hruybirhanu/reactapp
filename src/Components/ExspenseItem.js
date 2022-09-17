import React, { useState } from 'react';
import ExpenseDate from './ExpanseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
  const [title, setTitle] = useState(props.title);
  const clickhandler=()=>{
    setTitle('Updated!');
    console.log(title);
  };
    return(
      
      <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div ExpenseItem-describition><h2>{title}</h2></div>
        <div className='expense-item-price'>${props.amount}</div>
        <button onClick={clickhandler}>change title</button>
      </div>
    );
}
export default ExpenseItem;