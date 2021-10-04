let val;
// elementide loomine
const li = document.createElement('li');
// klassi määramine
li.className = 'collection-item';
// teksi lisamine
li.appendChild(document.createTextNode('Study JS element creation'));

// kodune töö
// loo link X näitamiseks
// ja lisa li sisse
// siin peab olema sinu kood
const a = document.createElement('a');
a.className = 'secondary-content';
a-appendChild(document.createTextNode('X'))
li.appendChild(a)

// lisame li element ul-sse
const ul = document.querySelector('ul');
ul.appendChild(li);