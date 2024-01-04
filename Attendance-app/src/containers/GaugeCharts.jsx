import GaugeChart from 'react-gauge-chart'
//import { Tooltip } from 'recharts';

const MyGauge=({value})=>(
  <div className='bg-red-200 row-start-1 row-end-4'>
    <GaugeChart id="gauge-chart" 
    percent={value /100}
    arcWidth={0.4}
    needleColor="#464A4F"
    colors="#FFFFFF"
    labels={['Low', 'Medium', 'High']}
    animate={true}
    
    />
  </div>
  
)
export default MyGauge;