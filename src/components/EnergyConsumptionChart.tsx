import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', consumo: 4000 },
  { name: 'Feb', consumo: 3000 },
  { name: 'Mar', consumo: 2000 },
  { name: 'Abr', consumo: 2780 },
  { name: 'May', consumo: 1890 },
  { name: 'Jun', consumo: 2390 },
];

const EnergyConsumptionChart: React.FC = () => {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="consumo" fill="#82ca9d" name="Consumo Energético (kWh)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyConsumptionChart;