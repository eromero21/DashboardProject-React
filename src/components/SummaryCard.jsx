
function SummaryCard ({ stat }) {
    return (
        <div className="summary-card">
            <div className="summary-label">{stat.label}</div>
            <div className="summary-value">{stat.value}</div>
            <div className="summary-change">{stat.change}</div>
        </div>
    );
}

export default SummaryCard;