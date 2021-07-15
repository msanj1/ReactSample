import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((d) => d.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
