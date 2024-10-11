import React, { useState } from 'react';
import { BarChart, Battery, Zap } from 'lucide-react';
import EnergyConsumptionChart from './components/EnergyConsumptionChart';
import ProcessList from './components/ProcessList';
import OptimizationSuggestions from './components/OptimizationSuggestions';

function App() {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Zap className="mr-2" /> EcoTech Monitor
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
              <li><a href="#processes" className="hover:underline">Procesos</a></li>
              <li><a href="#optimization" className="hover:underline">Optimización</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section id="dashboard" className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="mr-2" /> Dashboard de Consumo Energético
          </h2>
          <EnergyConsumptionChart />
        </section>

        <section id="processes" className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Battery className="mr-2" /> Procesos de Fabricación y Ensamblaje
          </h2>
          <ProcessList onSelectProcess={setSelectedProcess} />
        </section>

        <section id="optimization">
          <h2 className="text-xl font-semibold mb-4">Sugerencias de Optimización</h2>
          <OptimizationSuggestions selectedProcess={selectedProcess} />
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-12">
        <p>&copy; 2024 EcoTech Monitor. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;