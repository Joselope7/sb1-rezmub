import React from 'react';

interface Process {
  id: string;
  name: string;
  energyConsumption: number;
}

const processes: Process[] = [
  { id: '1', name: 'Ensamblaje de placas base', energyConsumption: 1500 },
  { id: '2', name: 'Fabricación de chips', energyConsumption: 3000 },
  { id: '3', name: 'Pruebas de calidad', energyConsumption: 500 },
  { id: '4', name: 'Empaquetado', energyConsumption: 200 },
];

interface ProcessListProps {
  onSelectProcess: (processId: string) => void;
}

const ProcessList: React.FC<ProcessListProps> = ({ onSelectProcess }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proceso</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consumo Energético (kWh)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {processes.map((process) => (
            <tr key={process.id}>
              <td className="px-6 py-4 whitespace-nowrap">{process.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{process.energyConsumption}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onSelectProcess(process.id)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Analizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessList;