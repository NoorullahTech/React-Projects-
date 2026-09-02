import './ExpenseTracker.css'
import {useEffect, useState} from 'react';

function ExpenseTracker(){
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState("");
    
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    useEffect(()=> {
        localStorage.setItem("expenses", JSON.stringify(expenses));

    }, [expenses]);

    function addExpense(){
       const newExpense =  {
            id: Date.now(),
            name: expense,
            amount: amount
        };

        setExpenses([...expenses, newExpense]);

        setExpense("");
        setAmount("");
    }

    function deleteeExpense(id){
        setExpenses(expenses.filter((expense) => expense.id !== id));
    }

    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);


    return(
     <>
    <h1>Expense Tracker</h1>
    
    <form>
        Expense Name: <br/>
        <input value = {expense} onChange = {(e)=> setExpense(e.target.value)} type = "text"/> <br/>
        
        Amount: <br/>
        <input value = {amount} onChange = {(e)=> setAmount(e.target.value)} type = "number"/> <br/> <br/>
        <button type = "button" onClick = {addExpense}>Add</button>
        
    </form>
    <h2>Total: {total}</h2>

    {expenses.map((expense) => (

        <div className = "expense" key={expense.id}>
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            <button onClick = {() => deleteeExpense(expense.id)}>delete</button>
        </div>
    ))}





     </>
    );
}

export default ExpenseTracker;