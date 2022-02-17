import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('all')
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((el)=>{
    return el.date.getFullYear().toString() === filteredYear 
  })
  return (
    <Card className="expenses"> 
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/> 
      
      <ExpensesList filteredYear={filteredYear} expenses = {props.items} expensesFilter = {filteredExpenses}/> 
    </Card>
  );
};

export default Expenses;
