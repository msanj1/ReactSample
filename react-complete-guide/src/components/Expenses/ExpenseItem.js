import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, {useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  console.log('Evaluating ExpenseItem');
  const clickHandler = ()=>{
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-date__year">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
