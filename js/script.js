/* global Chart */

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
  document.querySelector('.sidebar').classList.toggle('show', visible);
  document.querySelector('.manager').classList.toggle('show', visible);
  document.querySelector('.top-bar1').classList.toggle('show', visible);
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.quit').addEventListener('click', function () {
  openModal('#myModalQuit');
});

document.querySelector('.quit1').addEventListener('click', function () {
  openModal('#myModalQuit');
});


document.querySelector('.top-bar-login').addEventListener('click', function () {
  openModal('#myModalLogin');
});

document.querySelector('.top-bar-login1').addEventListener('click', function () {
  openModal('#myModalLogin');
});

document.querySelector('.popup').addEventListener('click', function () {
  openModal('#myModalMessage');
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



const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  console.log('Link was clicked!');
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.layout div.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};


const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
