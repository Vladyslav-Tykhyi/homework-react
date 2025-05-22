import style from "../styles/Transaction.module.css";

const TransactionHistory = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr className={style.top_side}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td className={style.form}>{item.type}</td>
              <td className={style.form}>{item.amount}</td>
              <td className={style.form}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
