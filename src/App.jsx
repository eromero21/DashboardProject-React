import './App.css'
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import { summaryStats, revenueByDay, recentTransactions } from "./mockData.js";

function App() {
  return (
    <div className="app-root">
        <Header />
        <main className="dash-main">
            <section className="dash-top">
                <SummaryCards items={summaryStats} />
            </section>

            <section className="dash-mid">
                {/* This will be the ChartPanel */}
            </section>

            <section className="dash-bot">
                {/* This will be the TransactionTable */}
            </section>
        </main>
    </div>
  );
}

export default App;
