import { PieChart,Pie,Tooltip,Legend} from "recharts";


function Circle() {
    
    const data = [
        { name: 'Geeksforgeeks', students: 50 ,fill: "blue" },
        { name: 'Technical scripter', students: 50,fill:"purple" },
        
    ];
  return (

    <div className="grid grid-cols-3 bg-white rounded-lg shadow-sm p-5">
        <div className="col-span-2">
            
         <PieChart width={700} height={700}>
            <Pie data={data} dataKey="students"   outerRadius={250} fill="#ffff"/>
            <Pie dataKey="students"   outerRadius={250} fill="#ffff" />
            <Legend/>
            <Tooltip/>
        </PieChart>
        </div>
    </div>
    
  
    
  )
}

export default Circle