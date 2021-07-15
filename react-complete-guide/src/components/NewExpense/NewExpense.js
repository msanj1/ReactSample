import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    // console.log(expenseDate);
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
