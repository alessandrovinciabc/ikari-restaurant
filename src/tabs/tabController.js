//Tabs
import home from './home.js';
import menu from './menu.js';
import contacts from './contacts.js';

const tabsDisplay = document.createElement('div');
tabsDisplay.classList.add('tabs');

function addTabs(...elements){
    for(let i = 0; i < elements.length; ++i){
        const newElement = document.createElement('div');
        newElement.textContent = elements[i].name;

        tabsDisplay.appendChild(newElement);
    }
}

addTabs(
    home,
);

export default tabsDisplay;