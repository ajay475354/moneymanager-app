import "./index.css";

const TransactionItem = (props) => {
  const { details, onDeleteHistory } = props;
  const { id, title, amount, type } = details;

  const onDelete = () => {
    onDeleteHistory(id);
  };

  return (
    <li className="table_row">
      <p className="transaction_text">{title}</p>
      <p className="transaction_text">{amount}</p>
      <p className="transaction_text">{type}</p>
      <div className="delete_container">
        <button className="button" type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete_icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
