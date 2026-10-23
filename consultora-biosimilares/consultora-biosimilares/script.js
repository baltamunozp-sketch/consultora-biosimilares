const money = (n) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));
const originalCost = document.getElementById('originalCost');
const discount = document.getElementById('discount');
const discountLabel = document.getElementById('discountLabel');
const originalLabel = document.getElementById('originalLabel');
const biosimilarLabel = document.getElementById('biosimilarLabel');
const savingsValue = document.getElementById('savingsValue');
const savingsAmount = document.getElementById('savingsAmount');
const originalBar = document.getElementById('originalBar');
const biosimilarBar = document.getElementById('biosimilarBar');

function updateChart() {
  const original = Math.max(0, Number(originalCost.value) || 0);
  const rate = Number(discount.value) || 0;
  const biosimilar = original * (1 - rate / 100);
  const savings = original - biosimilar;
  originalLabel.textContent = money(original);
  biosimilarLabel.textContent = money(biosimilar);
  savingsValue.textContent = `${rate}%`;
  savingsAmount.textContent = `${money(savings)} al año`;
  discountLabel.textContent = `${rate}%`;
  originalBar.style.width = original === 0 ? '0%' : '100%';
  biosimilarBar.style.width = `${100 - rate}%`;
}
originalCost.addEventListener('input', updateChart);
discount.addEventListener('input', updateChart);
updateChart();

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.textContent = opened ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Solicitud de diagnóstico — ${data.get('institution')}`;
  const body = [
    'Solicitud de diagnóstico para incorporación de biosimilares',
    '',
    `Nombre: ${data.get('name')}`,
    `Institución: ${data.get('institution')}`,
    `Correo: ${data.get('email')}`,
    `Área de interés: ${data.get('interest')}`,
    `Mensaje: ${data.get('message') || 'No indicado'}`,
    '',
    'Nota: no incluir datos personales de pacientes.'
  ].join('\n');
  document.getElementById('formFeedback').textContent = 'Se abrirá su aplicación de correo para preparar la solicitud. Este sitio no guarda los datos.';
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
