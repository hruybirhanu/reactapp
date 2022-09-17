import NewExpense from './Components/NewExpense/NewExpense';
import ExpenseItem from './Components/ExspenseItem';
function App() {
  const expenses=[{ id:'e1',
  date:new Date('12/01/2015'),
  title:'insurance',
  amount:'789.90'
  },
  {
id:'e2',
date:new Date('12/02/2015'),
title:'toilet',
amount:'89754.6'
  }
  ,
  {
id:'e3',
date:new Date('12/02/2015'),
title:'light',
amount:'45678.67'
  }
]
  return (
    
    <div className="App">
        <NewExpense></NewExpense>
     <ExpenseItem title={expenses[0].title}
                   amount={expenses[0].amount}
                   date={expenses[0].date}>

                   </ExpenseItem>
     <ExpenseItem title={expenses[1].title}
                   amount={expenses[1].amount}
                   date={expenses[1].date}>
                   </ExpenseItem>
     <ExpenseItem title={expenses[2].title}
                   amount={expenses[2].amount}
                   date={expenses[2].date}>
                   </ExpenseItem>
    </div>
  );
}

export default App;
