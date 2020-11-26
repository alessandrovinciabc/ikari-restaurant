import initializePage from "./load.js";
import tabsDisplay, {getTab} from "./tabs/tabController.js";

const DEFAULT_TAB = 'home';
const root = document.getElementById('content');

function changeTab(tab){
    let isTabObject = typeof tab === 'object';
    const newTab = getTab( isTabObject ? tab.dataset.id : tab);

    if(newTab){
        const currentTab = document.querySelector('.section');
    
        if(currentTab){
            currentTab.parentNode.removeChild(currentTab);        
        }
    
        tabsDisplay.insertAdjacentElement('afterend', newTab[0].dom);

        for(let el of tabsDisplay.children){
            el.classList.remove('active-tab');
        }

        if(isTabObject){
            tab.classList.add('active-tab');
        }else{
            tabsDisplay.children[0].classList.add('active-tab');
        }
    }
}

initializePage(root);
changeTab(DEFAULT_TAB);

tabsDisplay.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('tabs')){
        changeTab(e.target);
    }
});