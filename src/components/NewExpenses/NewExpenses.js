import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';


const NewExpenses = (props) => {

  const SaveExpensesDataHandler = (enteredExpensesData) =>{
      const expensesData = {
        ...enteredExpensesData,
        id : Math.random().toString()
      }
      props.newData(expensesData) 
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData = {SaveExpensesDataHandler} />
    </div>
  );
};

export default NewExpenses;
