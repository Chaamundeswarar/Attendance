import { BarChart, Bar, XAxis, YAxis, 
	CartesianGrid,Tooltip,Legend } from 'recharts';

const Line = () => {

	const data = [
		{ name: 'A', x: 10, y: 10},
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
		<BarChart width={500} height={500} data={data} >
			<CartesianGrid />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip/>
			<Legend/>
			<Bar dataKey="x" stackId="a" fill="#8884d8"  />
			<Bar dataKey="y" stackId="a" fill="#82ca9d" />
		</BarChart>
		</div>
	);
}

export default Line;
