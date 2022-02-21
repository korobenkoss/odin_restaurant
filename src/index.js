import header from './header';
import main from './mainContent';
import './style.css'

console.log('starting')

function root() {
    const content = document.createElement('div');
    content.id = 'content';
    
    content.appendChild(header());
    content.appendChild(main());
    return content;
}

document.body.appendChild(root());
document.querySelector('#defaultOpen').click();

