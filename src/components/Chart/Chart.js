import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props)=>{
    
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map((data) => <ChartBar
        key ={data.label}
        maxValue={totalMaximum}
        value = {data.value}
        label={data.label}
        
        />)}
    </div> 
}
export default  Chart;