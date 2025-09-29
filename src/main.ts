import './style.css';

// import './bases/01-const-let';
// import './bases/02-template-string';
// import './bases/03-object-literal';
// import './bases/04-arrays';
// import './bases/05-functions';
// import './bases/06-obj-destructuring';
// import './bases/07-array-destructuring';
// import './bases/08-imp-exp';
// import './bases/09-promises';
// import './bases/10-fetch-api';
import './bases/11-async-await';

// import { getHeroesByOwner } from './bases/08-imp-exp';
// import { Owner } from './data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`;

// En el main.ts usarán la función
// console.log(getHeroesByOwner(Owner.Marvel));
