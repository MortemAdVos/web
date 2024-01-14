// function getloyal(){
//     alert("Вы получите 15 рублей");
// }
// let btnloyal = document.querySelector('#btnloyal');
// btnloyal.onclick = getloyal;

// function getheretics(){
//     alert("Вы получите 15 рублей");
// }
// let btnheretics = document.querySelector('#btnheretics');
// btnheretics.onclick = getheretics;

// function getxenos(){
//     alert("Вы получите 15 рублей");
// }
// let btnxenos = document.querySelector('#btnxenos');
// btnxenos.onclick = getxenos;

const countdown = document.querySelector('.countdown');
const targetDate = new Date('2024-12-31T00:00:00');
 
function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}