import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('') 
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [form, setForm] = useState(false)

	
	const titleChangeHandler = (event) => {
		
		setTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const addNewFormHandler = () =>{
		setForm(true)
	}

	const cancelNewFormHandler = () =>{
		setForm(false)
	}

	const submitHandler = (event) => {
		
		event.preventDefault() 
		if (title && amount && date) {
			
			const expensesData = {
				title: title,
				amount: Number(amount),
				date: new Date(date),
			}
			props.onSaveExpensesData(expensesData)
			setForm(false)
		} else {
			
			alert('Введите текст')
		}
	}

	let showExpense;

	if(!form){
		showExpense = <button onClick = {addNewFormHandler} >Add New Expense</button>
	}else{
	showExpense =	<>
		<div className='new-expense__controls'>
		<div className='new-expense__control'>
			<label>Title</label>
			<input
				name='title'
				type='text'
				value={title}
				onChange={titleChangeHandler}
				size={10}
			/>
		</div>
		<div className='new-expense__control'>
			<label>Amount</label>
			<input
				name='amount'
				type='number'
				min='0.1'
				step='1'
				value={amount}
				onChange={amountChangeHandler}
			/>
		</div>
		<div className='new-expense__control'>
			<label>Date</label>
			<input
				name='date '
				type='date'
				min='2022-01-01'
				value={date}
				onChange={dateChangeHandler}
			/>
		</div>
	</div>
	<div className='new-expense__actions'>
		<button  type='submit'>Add Expense</button>
		<button onClick={cancelNewFormHandler}>Cancel</button>
	</div>
	</>
	}

	return (
		
		<form onSubmit={submitHandler}>
			{showExpense}
			
		</form>
	)
}

export default ExpenseForm;
