import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({expensesFilter,expenses,filteredYear}) => {
    let expensesContent = <h2 className='expenses-list__fallback'>No Expense Found</h2> 
	if (expensesFilter.length > 0) { 
       expensesContent = expensesFilter.map((element) => {
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            )
        })
	}
    if(filteredYear == 'all' && expenses.length > 0){
        
       expensesContent = expenses.map((element) => {
    
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            )
        })
    }
	return (
		<ul className='expenses-list'>
            {expensesContent} 
		</ul>
	)
}

export default ExpensesList;
