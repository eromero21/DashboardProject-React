
function ChartPanel({ data }) {
    const maxHeight = Math.max(...data.map(d => d.value));
    const maxBarHeight = 160;

    return (
      <div className="chart-panel">
          <h2 className="header-text">Revenue Chart (Last 7 days)</h2>
          <div className="chart-bars">
              {data.map((d) => {
              const height = (d.value / maxHeight) * maxBarHeight;
              return (
                  <div key={d.day} className="chart-bar-wrapper">
                      <div
                          className="chart-bar"
                          style={{height: `${height}px`}}
                          title={`${d.day}: $${d.value}`} />
                      <span className="chart-bar-label">{d.day}</span>
                  </div>
              );
          })}
          </div>
      </div>
    );
}

export default ChartPanel;