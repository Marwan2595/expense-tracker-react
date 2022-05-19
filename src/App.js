import './App.css';
import ExpenseItem from './components/expenseItem/ExpenseItem';
import Expenses from './components/expenses/Expenses';
let expenses = [
  {title : "Car Wash" , amount : 35 , date : new Date(2022,2,20)},
  {title : "Buy Keyboared" , amount : 300 , date : new Date(2022,2,20)},
  {title : "Transportation" , amount : 20 , date : new Date(2022,2,20)},
];
function App() {
  return (
    
        <Expenses items={expenses}/>
    
  );
}

export default App;
