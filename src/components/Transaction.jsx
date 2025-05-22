import trans from "./Transaction.json";
import TransactionHistory from "./TransactionHistory";

const Transaction = () => {
  return (
    <>
      <TransactionHistory items={trans} />
    </>
  );
};

export default Transaction;
