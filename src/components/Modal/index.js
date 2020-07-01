import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
var htInner = 400;
var htOuter = 450;
if (window.innerWidth < 850) {
     htInner = 320;
     htOuter = 300;
}

const Chart = ({ close, graphData, countryName }) => {

    return (
        <div>
            <button onClick={close}>close</button>
            <ResponsiveContainer width='100%' height={htOuter}>
                <LineChart height={htInner} data={graphData} margin={{ top: 5, right: 15, bottom: 5, left: 15 }}>
                    <Line type="monotone" dataKey="confirmed" dot={false} stroke="red" />
                    <Line type="monotone" dataKey="deaths" dot={false} stroke="black" />
                    <Line type="monotone" dataKey="recovered" dot={false} stroke="green" />
                    <XAxis dataKey="date">
                        <Label value={countryName} offset={300} position="top" />
                    </XAxis>
                    <YAxis />
                    <Legend />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
