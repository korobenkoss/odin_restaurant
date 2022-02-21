import tabMenu from "./tabMenu";

export default function() {
    const navBar = document.createElement('nav');
    navBar.classList.add('navBar');

    // links.innerHTML = topMenu;
    navBar.appendChild(tabMenu());


    return navBar;
}

