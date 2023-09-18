import { useState } from "react";

function AccountButtonPanel({ dispatch, isActive }) {
  const isDisabled = !isActive;

  function handleButtonClick(acitonType) {
    dispatch({ type: acitonType });
  }

  return (
    <>
      <button
        className={isDisabled === false ? "disabled-button" : ""}
        onClick={() => handleButtonClick("openAcc")}
        disabled={!isDisabled}
      >
        Open account
      </button>
      <button
        className={isDisabled ? "disabled-button" : ""}
        onClick={() => handleButtonClick("deposit")}
        disabled={isDisabled}
      >
        Deposit $150
      </button>
      <button
        className={isDisabled ? "disabled-button" : ""}
        onClick={() => handleButtonClick("withdraw")}
        disabled={isDisabled}
      >
        Withdraw $50
      </button>
      <button
        className={isDisabled ? "disabled-button" : ""}
        onClick={() => handleButtonClick("requestLoan")}
        disabled={isDisabled}
      >
        Request a Loan of $5000
      </button>
      <button
        className={isDisabled ? "disabled-button" : ""}
        onClick={() => handleButtonClick("payLoan")}
        disabled={isDisabled}
      >
        Pay Loan
      </button>
      <button
        className={isDisabled ? "disabled-button" : ""}
        onClick={() => handleButtonClick("closeAcc")}
        disabled={isDisabled}
      >
        Close Account
      </button>
    </>
  );
}

export default AccountButtonPanel;
