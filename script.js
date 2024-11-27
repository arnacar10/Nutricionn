document.getElementById("boton-ingresar").addEventListener("click", function() {
    document.getElementById("pantalla-bienvenida").style.display = "none";
    document.getElementById("pantalla-principal").style.display = "block";
  });
  
  document.getElementById("boton-tabla-nutricional").addEventListener("click", function() {
    document.getElementById("pantalla-bienvenida").style.display = "none";
    document.getElementById("pantalla-tabla-nutricional").style.display = "block";
  });
  
  document.getElementById("boton-volver-bienvenida").addEventListener("click", function() {
    document.getElementById("pantalla-principal").style.display = "none";
    document.getElementById("pantalla-bienvenida").style.display = "block";
  });
  
  document.getElementById("boton-volver-bienvenida-tabla").addEventListener("click", function() {
    document.getElementById("pantalla-tabla-nutricional").style.display = "none";
    document.getElementById("pantalla-bienvenida").style.display = "block";
  });
  
  // Eventos de clic para los botones de cálculo
  document.getElementById("boton-calcular-chiva").addEventListener("click", calcularNutricionChiva);
  document.getElementById("boton-calcular-vaca").addEventListener("click", calcularNutricionVaca);
  document.getElementById("boton-calcular-gallina").addEventListener("click", calcularNutricionGallina);
  document.getElementById("boton-calcular-cerdo").addEventListener("click", calcularNutricionCerdo);
  
  // Funciones de cálculo
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
