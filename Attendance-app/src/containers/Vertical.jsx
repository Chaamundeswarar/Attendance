import { BarChart, Bar, XAxis, YAxis, 
	CartesianGrid,Tooltip,Legend } from 'recharts';

const Vertical = () => {

	const data = [
		{ name: 'A', x: 10, y:10,},
		{ name: 'B', x: 0, y: 0,},
		{ name: 'C', x: 0, y: 0,},
		{ name: 'D', x: 0 ,y: 0,},
		{ name: 'E', x: 0, y: 0,},
		{ name: 'F', x: 0, y: 0,},
		{ name: 'G', x: 0, y: 0,},
		{ name: 'H', x: 0, y: 0,},
		{ name: 'I', x: 0, y: 0,},
	];

	return (
		<div>
		<BarChart width={500} height={500} data={data} layout='vertical' >
			<XAxis type='name' />
			<YAxis type='category'/>
			<Tooltip/>
			<Legend/>
			<Bar dataKey="x"  fill="#8884d8" data={data} />
			<Bar dataKey="y"  fill="#82ca9d" data={data}/>
		</BarChart>
		</div>
	);
}

export default Vertical;
