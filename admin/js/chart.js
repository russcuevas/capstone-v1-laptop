// bar chart dashboard
const ctx = document.getElementById('bar_chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
    datasets: [{
        label: '# of Examinees',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#461111',
        borderColor: '#461111',
        borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});