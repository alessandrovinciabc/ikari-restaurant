const ID = 'home';

const decoration = document.createElement('div');
decoration.textContent = '🍣';
decoration.classList.add('side-decoration');

const p = document.createElement('p');
p.innerHTML = 'Our restaurant is most certainly epic.<br/>We serve high quality sushi. Come eat with us!';

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