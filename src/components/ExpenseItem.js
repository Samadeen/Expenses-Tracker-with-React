import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>13 March,2022</div>
      <div>
        <h2 className='expense-item__description'>Travelling Money</h2>
      </div>
      <div className='expense-item__price'>50,000</div>
    </div>
  );
}

export default ExpenseItem;
