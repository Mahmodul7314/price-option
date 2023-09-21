
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    var subjectMarksData = [
        { "id": 101, "name": "John", "math": 88, "physics": 75, "chemistry": 92 },
        { "id": 102, "name": "Sarah", "math": 76, "physics": 82, "chemistry": 88 },
        { "id": 103, "name": "Michael", "math": 92, "physics": 89, "chemistry": 95 },
        { "id": 104, "name": "Emily", "math": 85, "physics": 78, "chemistry": 84 },
        { "id": 105, "name": "David", "math": 78, "physics": 80, "chemistry": 90 },
        { "id": 106, "name": "Lisa", "math": 90, "physics": 92, "chemistry": 87 },
        { "id": 107, "name": "Kevin", "math": 84, "physics": 77, "chemistry": 79 },
        { "id": 108, "name": "Emma", "math": 79, "physics": 88, "chemistry": 81 },
        { "id": 109, "name": "James", "math": 95, "physics": 94, "chemistry": 97 },
        { "id": 110, "name": "Olivia", "math": 87, "physics": 85, "chemistry": 89 }
    ];
    
    return (
        
        <div>
            <LChart className='pl-12' width={800} height={600} data={subjectMarksData}>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Line dataKey='math' stroke='red'></Line>
            <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;