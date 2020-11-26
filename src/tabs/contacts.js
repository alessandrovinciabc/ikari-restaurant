const ID = 'contacts';

const decoration = document.createElement('div');
decoration.textContent = '🍙';
decoration.classList.add('side-decoration');

const p = document.createElement('p');
p.innerHTML = 'Just come say hello! :D';

const textContainer = document.createElement('div');
textContainer.appendChild(p);
textContainer.classList.add('text');

const section = document.createElement('div');
section.dataset.id = ID;
section.classList.add('section');
section.append(decoration, textContainer);

export default {
    name: ID,
    dom: section,
};