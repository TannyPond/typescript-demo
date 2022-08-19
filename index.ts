// Import stylesheets
// import './style.css';

let title: string = 'MyApp';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<hr>
<p> Parágrafo qqr... </p>`;

console.log('Olá mundo...');

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
