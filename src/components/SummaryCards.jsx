import SummaryCard from './SummaryCard';

function SummaryCards({ items }) {

    return (
        <div className="summary-cards">
            {items.map(item => (
                <SummaryCard key={item.id} stat={item} />
            ))}
        </div>
    );
}

export default SummaryCards;