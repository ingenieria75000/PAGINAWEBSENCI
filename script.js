fetch('data/desempleo.json')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('desempleoChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.ciudad),
        datasets: [{
          label: 'Tasa de Desempleo (%)',
          data: data.map(d => d.tasa),
          backgroundColor: '#0099cc',
          borderRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Tasa de Desempleo por Ciudad en Colombia (2024)'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '% de Desempleo'
            }
          }
        }
      }
    });
  });
