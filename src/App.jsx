import './App.css'
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import ChartPanel from './components/ChartPanel';
import { summaryStats, revenueByDay, recentTransactions } from "./mockData.js";
import TransactionsTable from "./components/TransactionsTable";

function App() {
  return (
    <div className="app-root">
        <Header />
        <main className="dash-main">
            <section className="dash-top">
                <SummaryCards items={summaryStats} />
            </section>

            <section className="dash-mid">
                <ChartPanel data={revenueByDay} />
            </section>

            <section className="dash-bot">
                <TransactionsTable transactions={recentTransactions} />
            </section>
        </main>
    </div>
  );
}

export default App;
