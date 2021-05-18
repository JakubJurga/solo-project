/* global Chart */

function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show')
  };
  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });


var chart1 = document.getElementById('myChart').getContext('2d');

new Chart(chart1, {

  type: 'bar',
  data: {

    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],

    datasets: [{

      label: 'Signups',

      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',

      data: [ 33, 42, 13, 68, 26, 6, 14, 9, 24, 14 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 43, 1, 0, 47, 11, 50, 44, 22, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 53, 33, 68, 13, 22, 41, 13, 99, 48, 48 ],

    }]
  },
});
