
function TransactionsTable({ transactions }) {
    return (
      <div className="transactions-panel">
          <h2>Recent Transactions</h2>
          <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>{transaction.user}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.status}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
    );
}

export default TransactionsTable;