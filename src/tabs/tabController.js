//Tabs
import home from './home.js';
import menu from './menu.js';
import contacts from './contacts.js';

const tabs = [home, menu, contacts];

const tabsDisplay = document.createElement('div');
tabsDisplay.classList.add('tabs');

function addTabs(elements){
    for(let i = 0; i < elements.length; ++i){
        const newElement = document.createElement('div');
        newElement.textContent = elements[i].name;
        newElement.dataset.id = elements[i].name;

        tabsDisplay.appendChild(newElement);
    }
}

function getTab(name){
    const newTab = tabs.filter((el)=>{
        if(el.name === name){
            return true;
        }
    });

    return newTab;
}

addTabs(tabs);

export default tabsDisplay;
export {getTab};