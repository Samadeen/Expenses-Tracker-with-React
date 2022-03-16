import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //Use of multiple useState
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //Use of singe useState
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    //Preferred Way to go
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
  };
  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
