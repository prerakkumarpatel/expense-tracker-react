import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing , setIsEditing ] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const handleAddClick = () => {setIsEditing(true);};
  const handleCancelClick = () => {setIsEditing(false);};


  return (
    <div className='new-expense'>
      {isEditing &&   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel ={handleCancelClick} /> }
      {!isEditing && <button onClick = {handleAddClick}>Add Expense</button>}
    
    </div>
  );
};

export default NewExpense;
