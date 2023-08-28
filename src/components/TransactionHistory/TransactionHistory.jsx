
import css from './TransactionHistory.module.css';

export const TransactionHistory = ( items ) => {
  console.dir( items.transactions );
    return (
      <table className={css.transaction_history}>
        <thead>
          <tr className={css.table_head}>
            <th className={css.head_column}>Type</th>
            <th className={css.head_column}>Amount</th>
            <th className={css.head_column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.column}>{type}</td>
              <td className={css.column}>{amount}</td>
              <td className={css.column}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}