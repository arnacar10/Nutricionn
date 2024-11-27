function calcularNutricionChiva() {
    const peso = document.getElementById('peso-chiva').value;
    const resultado = document.getElementById('resultado-chiva');
    if (peso) {
      const ingestaRecomendada = (peso * 0.05).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionVaca() {
    const peso = document.getElementById('peso-vaca').value;
    const etapa = document.getElementById('etapa-vaca').value;
    const resultado = document.getElementById('resultado-vaca');
    if (peso && etapa) {
      let ingestaRecomendada;
      switch (etapa) {
        case 'gestante':
          ingestaRecomendada = (peso * 0.04).toFixed(2);
          break;
        case 'lechera':
          ingestaRecomendada = (peso * 0.05).toFixed(2);
          break;
        case 'engorde':
          ingestaRecomendada = (peso * 0.03).toFixed(2);
          break;
        default:
          ingestaRecomendada = (peso * 0.04).toFixed(2);
      }
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionGallina() {
    const peso = document.getElementById('peso-gallina').value;
    const resultado = document.getElementById('resultado-gallina');
    if (peso) {
      const ingestaRecomendada = (peso * 0.03).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionCerdo() {
    const peso = document.getElementById('peso-cerdo').value;
    const resultado = document.getElementById('resultado-cerdo');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  function calcularNutricionVacaLechera() {
    const peso = document.getElementById('peso-vaca-lechera').value;
    const resultado = document.getElementById('resultado-vaca-lechera');
    if (peso) {
      const ingestaRecomendada = (peso * 0.05).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionVacaGestante() {
    const peso = document.getElementById('peso-vaca-gestante').value;
    const resultado = document.getElementById('resultado-vaca-gestante');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionVacaEngorde() {
    const peso = document.getElementById('peso-vaca-engorde').value;
    const resultado = document.getElementById('resultado-vaca-engorde');
    if (peso) {
      const ingestaRecomendada = (peso * 0.03).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionGallinaPonedora() {
    const peso = document.getElementById('peso-gallina-ponedora').value;
    const resultado = document.getElementById('resultado-gallina-ponedora');
    if (peso) {
      const ingestaRecomendada = (peso * 0.03).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionGallinaCrecimiento() {
    const peso = document.getElementById('peso-gallina-crecimiento').value;
    const resultado = document.getElementById('resultado-gallina-crecimiento');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionCerdoCrecimiento() {
    const peso = document.getElementById('peso-cerdo-crecimiento').value;
    const resultado = document.getElementById('resultado-cerdo-crecimiento');
    if (peso) {
      const ingestaRecomendada = (peso * 0.05).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionCerdoEngorde() {
    const peso = document.getElementById('peso-cerdo-engorde').value;
    const resultado = document.getElementById('resultado-cerdo-engorde');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  function calcularNutricionCerdoReproductor() {
    const peso = document.getElementById('peso-cerdo-reproductor').value;
    const resultado = document.getElementById('resultado-cerdo-reproductor');
    if (peso) {
      const ingestaRecomendada = (peso * 0.03).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionTernero() {
    const peso = document.getElementById('peso-ternero').value;
    const resultado = document.getElementById('resultado-ternero');
    if (peso) {
      const ingestaRecomendada = (peso * 0.05).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }
  
  function calcularNutricionToro() {
    const peso = document.getElementById('peso-toro').value;
    const resultado = document.getElementById('resultado-toro');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
    }
  }

  function calcularNutricionVaca() {
    const peso = document.getElementById('peso-vaca').value;
    const etapa = document.getElementById('etapa-vaca').value;
    const resultado = document.getElementById('resultado-vaca');
    const alimentos = document.getElementById('alimentos-vaca');
    if (peso && etapa) {
      let ingestaRecomendada;
      let alimentosRecomendados;
      switch (etapa) {
        case 'gestante':
          ingestaRecomendada = (peso * 0.04).toFixed(2);
          alimentosRecomendados = [
            { nombre: 'Heno de alfalfa', porcentaje: 30 },
            { nombre: 'Grano de maíz', porcentaje: 25 },
            { nombre: 'Grano de trigo', porcentaje: 20 },
            { nombre: 'Proteína de soja', porcentaje: 25 }
          ];
          break;
        case 'lechera':
          ingestaRecomendada = (peso * 0.05).toFixed(2);
          alimentosRecomendados = [
            { nombre: 'Heno de alfalfa', porcentaje: 25 },
            { nombre: 'Grano de maíz', porcentaje: 30 },
            { nombre: 'Grano de trigo', porcentaje: 20 },
            { nombre: 'Proteína de soja', porcentaje: 25 }
          ];
          break;
        case 'engorde':
          ingestaRecomendada = (peso * 0.03).toFixed(2);
          alimentosRecomendados = [
            { nombre: 'Grano de maíz', porcentaje: 40 },
            { nombre: 'Grano de trigo', porcentaje: 30 },
            { nombre: 'Proteína de soja', porcentaje: 30 }
          ];
          break;
        default:
          ingestaRecomendada = (peso * 0.04).toFixed(2);
          alimentosRecomendados = [
            { nombre: 'Heno de alfalfa', porcentaje: 30 },
            { nombre: 'Grano de maíz', porcentaje: 25 },
            { nombre: 'Grano de trigo', porcentaje: 20 },
            { nombre: 'Proteína de soja', porcentaje: 25 }
          ];
      }
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
      alimentos.innerHTML = `
        <h2>Alimentos recomendados:</h2>
        <ul>
          ${alimentosRecomendados.map(alimento => `<li>${alimento.nombre}: ${alimento.porcentaje}%</li>`).join('')}
        </ul>
      `;
    }
  }
  
  function calcularNutricionGallina() {
    const peso = document.getElementById('peso-gallina').value;
    const resultado = document.getElementById('resultado-gallina');
    const alimentos = document.getElementById('alimentos-gallina');
    if (peso) {
      const ingestaRecomendada = (peso * 0.03 * 1000).toFixed(2);
      const alimentosRecomendados = [
        { nombre: 'Grano de maíz', porcentaje: 40 },
        { nombre: 'Grano de trigo', porcentaje: 30 },
        { nombre: 'Proteína de soja', porcentaje: 30 }
      ];
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} gramos de alimento`;
      alimentos.innerHTML = `
        <h2>Alimentos recomendados:</h2>
        <ul>
          ${alimentosRecomendados.map(alimento => `<li>${alimento.nombre}: ${alimento.porcentaje}%</li>`).join('')}
        </ul>
      `;
    }
  }
  
  function calcularNutricionCerdo() {
    const peso = document.getElementById('peso-cerdo').value;
    const resultado = document.getElementById('resultado-cerdo');
    const alimentos = document.getElementById('alimentos-cerdo');
    if (peso) {
      const ingestaRecomendada = (peso * 0.04).toFixed(2);
      const alimentosRecomendados = [
        { nombre: 'Grano de maíz', porcentaje: 50 },
        { nombre: 'Grano de trigo', porcentaje: 30 },
        { nombre: 'Proteína de soja', porcentaje: 20 }
      ];
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
      alimentos.innerHTML = `
        <h2>Alimentos recomendados:</h2>
        <ul>
          ${alimentosRecomendados.map(alimento => `<li>${alimento.nombre}: ${alimento.porcentaje}%</li>`).join('')}
        </ul>
      `;
    }
  }
  function calcularNutricionChiva() {
    const peso = document.getElementById('peso-chiva').value;
    const resultado = document.getElementById('resultado-chiva');
    const alimentos = document.getElementById('alimentos-chiva');
    if (peso) {
      const ingestaRecomendada = (peso * 0.05).toFixed(2);
      const alimentosRecomendados = [
        { nombre: 'Heno de alfalfa', porcentaje: 40 },
        { nombre: 'Grano de maíz', porcentaje: 30 },
        { nombre: 'Grano de trigo', porcentaje: 15 },
        { nombre: 'Proteína de soja', porcentaje: 15 }
      ];
      resultado.textContent = `Ingesta recomendada: ${ingestaRecomendada} kg de alimento`;
      alimentos.innerHTML = `
        <h2>Alimentos recomendados:</h2>
        <ul>
          ${alimentosRecomendados.map(alimento => `<li>${alimento.nombre}: ${alimento.porcentaje}%</li>`).join('')}
        </ul>
      `;
    }
  }