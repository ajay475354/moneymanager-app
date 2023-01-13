import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import MoneyDetails from "../MoneyDetails/index";
import TransactionItem from "../TransactionItem/index";

import "./index.css";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: "",
    amount: "",
    option: transactionTypeOptions[0].optionId,
  };

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onChangeAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  onChangeSelect = (event) => {
    this.setState({
      option: event.target.value,
    });
  };

  onAddAmount = (event) => {
    event.preventDefault();
    const { title, amount, option } = this.state;

    const typeOption = transactionTypeOptions.find(
      (eachTransaction) => eachTransaction.optionId === option
    );

    const { displayText } = typeOption;

    const newList = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    };

    this.setState((prevState) => ({
      transactionList: [...prevState.transactionList, newList],
      title: "",
      amount: "",
      option: transactionTypeOptions[0].optionId,
    }));
  };

  getBalanceAmount = () => {
    const { transactionList } = this.state;
    let balance = 0;
    let income = 0;
    let expenses = 0;

    transactionList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount;
      } else {
        expenses += eachTransaction.amount;
      }
    });
    balance = income - expenses;
    return balance;
  };

  getIncomeBalance = () => {
    const { transactionList } = this.state;
    let income = 0;

    transactionList.forEach((each) => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount;
      }
    });
    return income;
  };

  getExpensesBalance = () => {
    const { transactionList } = this.state;
    let expenses = 0;

    transactionList.forEach((each) => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount;
      }
    });
    return expenses;
  };

  onDeleteHistory = (id) => {
    const { transactionList } = this.state;

    const updatedTransactionList = transactionList.filter(
      (each) => each.id !== id
    );

    this.setState({
      transactionList: updatedTransactionList,
    });
  };

  render() {
    const balanceAmount = this.getBalanceAmount();
    const incomeAmout = this.getIncomeBalance();
    const expenssesAmount = this.getExpensesBalance();

    const { title, amount, transactionList } = this.state;

    return (
      <div className="app_bg_container">
        <div className="responsive_container">
          <div className="header_container">
            <h1 className="heading">Hi Ajay Kumar....</h1>
            <p className="header_para">
              Welcome back to your
              <span className="span_ele">Money Manager.</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmout={incomeAmout}
            expenssesAmount={expenssesAmount}
          />

          <div className="details">
            <form className="form_container" onSubmit={this.onAddAmount}>
              <label htmlFor="title_id" className="label">
                Title
              </label>
              <input
                type="text"
                placeholder="title"
                id="title_id"
                className="title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount_id" className="label">
                Amount
              </label>
              <input
                type="text"
                placeholder="amount"
                id="amount_id"
                className="title"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label className="label" htmlFor="select_id">
                Type
              </label>
              <select
                className="select"
                id="select_id"
                onChange={this.onChangeSelect}
              >
                {transactionTypeOptions.map((each) => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button className="button_1" type="submit">
                Add
              </button>
            </form>

            <div className="history_transactions">
              <h1>Transactions</h1>
              <div className="transaction_table_container">
                <ul className="transaction_table">
                  <li className="table_header">
                    <p className="table-header-cell">title</p>
                    <p className="table-header-cell">amount</p>
                    <p className="table-header-cell">type</p>
                  </li>
                  {transactionList.map((each) => (
                    <TransactionItem
                      key={each.id}
                      details={each}
                      onDeleteHistory={this.onDeleteHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
