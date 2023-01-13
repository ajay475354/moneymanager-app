import "./index.css";

const MoneyDetails = (props) => {
  const { balanceAmount, incomeAmout, expenssesAmount } = props;
  return (
    <div className="balance_details_container">
      <div className="card_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="ajay"
          className="image_1"
        />
        <div>
          <h1 className="heading_1">Your Balance</h1>
          <p className="balance">{balanceAmount}</p>
        </div>
      </div>

      <div className="card_container_2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="ajay"
          className="image_1"
        />
        <div>
          <h1 className="heading_1">Your Income</h1>
          <p className="balance">{incomeAmout}</p>
        </div>
      </div>

      <div className="card_container_3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="ajay"
          className="image_1"
        />
        <div>
          <h1 className="heading_1">Your Expensses</h1>
          <p className="balance">{expenssesAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default MoneyDetails;
