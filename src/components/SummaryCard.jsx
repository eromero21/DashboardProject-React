
function SummaryCard ({ stat }) {
    const signCalc = stat.change[0] === '+' ? "summary-change-p"
        : stat.change[0] === '-' ? "summary-change-n" : "summary-change-p";
    return (
        <div className="summary-card">
            <div className="summary-label">{stat.label}</div>
            <div className="summary-value">{stat.value}</div>
            <div className={signCalc}>{stat.change}</div>
        </div>
    );
}

export default SummaryCard;