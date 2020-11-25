/*TEMPLATE*

<div class="header">
    <div class="logo">IKARI🍜</div>
    <img src="japanese-wave-pattern.svg" alt="japanese wave pattern" class="decoration">
    <h1>Quest for the perfect taste</h1>
    <img class="main-img" src="sushimain.jpg" alt="sushi on a plate" draggable="false">
</div>
<div class="tabs">
    <div>Identity</div>
    <div>Menu</div>
    <div>Contacts</div>
</div>
<div class="section">
    <div class="side-decoration">
        🍣
    </div>
    <div class="text">
        <p>Our restaurant is most certainly epic.<br/>We serve high quality sushi. Come eat with us!</p>
    </div>
</div>
<div class="footer">
    ©2020 Ikari Restaurant
</div>

*/

import tabDisplay from './tabs/tabController.js';

const text = {
    nameLogo: document.createTextNode('IKARI🍜'),
    headline: document.createTextNode('Quest for the perfect taste!'),
    footer: document.createTextNode('©2020 Ikari Restaurant'),
};

const logo = document.createElement('div');
logo.classList.add('logo');
logo.appendChild(text.nameLogo);

const waveBackground = document.createElement('img');
waveBackground.src = 'japanese-wave-pattern.svg';
waveBackground.attributes.alt = 'japanese wave pattern';
waveBackground.classList.add('decoration');

const headline = document.createElement('h1');
headline.appendChild(text.headline);

const mainImage = document.createElement('img');
mainImage.src = 'sushimain.jpg';
mainImage.attributes.alt = 'sushi on a plate';
mainImage.attributes.draggable = 'false';
mainImage.classList.add('main-img');

const footer = document.createElement('div');
footer.classList.add('footer');
footer.appendChild(text.footer);

const header = document.createElement('div');
header.classList.add('header');

header.append(logo, waveBackground, headline, mainImage);

function loadPage(domContainer){
    domContainer.append(
        header,
        tabDisplay,
        footer
    );
}

export default loadPage;