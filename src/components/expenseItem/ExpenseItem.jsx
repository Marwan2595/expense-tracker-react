import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../layout/card/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    return (
        <>
            <Card className="expense-item">
                <ExpenseDate Date={props.Date} />
                <div className="expense-item__description">
                    <h2>{props.Title}</h2>
                    <div className="expense-item__price">
                        {props.Amount} EGP
                    </div>
                </div>
            </Card>

        </>
    );
}

export default ExpenseItem;