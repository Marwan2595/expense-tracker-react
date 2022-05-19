import ExpenseItem from "../expenseItem/ExpenseItem";
import Card from "../layout/card/Card";
import "./Expenses.css";

function Expenses(props) {
    return ( 
        <Card className="expenses">
                <ExpenseItem  Title={props.items[1].title} Date={props.items[1].date}  Amount ={props.items[1].amount} />
                <ExpenseItem  Title={props.items[0].title} Date={props.items[0].date}  Amount ={props.items[0].amount} />
                <ExpenseItem  Title={props.items[2].title} Date={props.items[2].date}  Amount ={props.items[2].amount} />
        </Card>
     );
}

export default Expenses;