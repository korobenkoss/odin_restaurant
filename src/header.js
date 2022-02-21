import navBar from './navBar'

export default function() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(navBar());

    return header;
}


