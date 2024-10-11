import React from 'react';

interface OptimizationSuggestionsProps {
  selectedProcess: string | null;
}

const suggestions = {
  '1': [
    'Implementar sistemas de automatización para reducir el tiempo de ensamblaje',
    'Utilizar herramientas de bajo consumo energético',
    'Optimizar la disposición de la línea de ensamblaje para minimizar el movimiento',
  ],
  '2': [
    'Actualizar a equipos de fabricación de chips más eficientes energéticamente',
    'Implementar sistemas de recuperación de calor en el proceso de fabricación',
    'Optimizar los ciclos de producción para minimizar el tiempo de inactividad',
  ],
  '3': [
    'Utilizar equipos de prueba de bajo consumo',
    'Implementar pruebas automatizadas para reducir el tiempo y el consumo de energía',
    'Optimizar los protocolos de prueba para enfocarse en las áreas críticas',
  ],
  '4': [
    'Utilizar materiales de empaquetado eco-amigables y de bajo impacto',
    'Optimizar el diseño del empaquetado para reducir el uso de materiales',
    'Implementar sistemas de empaquetado automatizados de alta eficiencia',
  ],
};

const OptimizationSuggestions: React.FC<OptimizationSuggestionsProps> = ({ selectedProcess }) => {
  if (!selectedProcess) {
    return <p className="text-gray-500">Selecciona un proceso para ver sugerencias de optimización.</p>;
  }

  const processSuggestions = suggestions[selectedProcess as keyof typeof suggestions] || [];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Sugerencias para optimizar el proceso seleccionado:</h3>
      <ul className="list-disc pl-5 space-y-2">
        {processSuggestions.map((suggestion, index) => (
          <li key={index} className="text-gray-700">{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizationSuggestions;