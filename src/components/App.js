import { useReducer } from "react";
import Main from "./Main";
import Header from "./Header";
import BalanceAndLoan from "./BalanceAndLoan";
import AccountButtonPanel from "./AccountButtonPanel";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  loanRequested: false,
  loanPaid: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAcc":
      return { ...state, balance: 500, isActive: true };

    case "deposit":
      return { ...state, balance: state.balance + 150 };

    case "withdraw":
      return { ...state, balance: state.balance - 50 };

    case "requestLoan":
      if (!state.isActive || state.loanRequested || state.loanPaid) {
        return state;
      }
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
        loanRequested: true,
      };

    case "payLoan":
      if (state.loanPaid) {
        return state;
      }
      return {
        ...state,
        balance: state.balance - 5000,
        loan: state.loan - 5000,
        loanPaid: true,
      };

    case "closeAcc":
      if (state.balance === 0 && state.loan === 0) {
        return { ...initialState };
      }
      return {
        ...state,
      };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app">
      <Main>
        <Header />
        <BalanceAndLoan balance={balance} loan={loan} />
        <AccountButtonPanel dispatch={dispatch} isActive={isActive} />
      </Main>
    </div>
  );
}

export default App;
